package cmd

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"regexp"
	"strconv"

	"github.com/spf13/cobra"

	"github.com/golang-vietnam/golang-vietnam-homepage/command/git"
	"github.com/golang-vietnam/golang-vietnam-homepage/command/models"
)

func init() {
	rootCmd.AddCommand(runCmd)
}

// runCmd represents the run command
var runCmd = &cobra.Command{
	Use:   "run",
	Short: "run the crawler bot",
	Long:  `go to Facebook page Golang Viet Nam get the 5 latest events and show into GolangVietNam.org page`,
	RunE: func(cmd *cobra.Command, args []string) error {
		response, err := getFBEvents()
		if err != nil {
			return err
		}

		gitClient, err := git.NewClient()
		if err != nil {
			return err
		}

		content := prepareContent(response)
		if err := gitClient.Commit(content); err != nil {
			return err
		}

		return nil
	},
}

func getFBEvents() (*models.Response, error) {
	request, err := http.NewRequest("GET", os.Getenv("FACEBOOK_EVENTS_URL"), nil)
	if err != nil {
		return nil, err
	}

	query := request.URL.Query()
	query.Add("fields", "attending_count,id,place,start_time,name")
	query.Add("access_token", os.Getenv("FACEBOOK_ACCESSTOKEN"))
	request.URL.RawQuery = query.Encode()

	var client http.Client
	res, err := client.Do(request)
	if err != nil {
		return nil, err
	}

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return nil, err
	}

	var r models.Response
	buf := bytes.NewBuffer(body)
	if err := json.NewDecoder(buf).Decode(&r); err != nil {
		return nil, err
	}

	return &r, nil
}

func prepareContent(res *models.Response) string {
	var content string
	// get last 5 events
	for i := 0; i < 6; i++ {
		regexpLeadclose := regexp.MustCompile(`^[\s\p{Zs}]+|[\s\p{Zs}]+$`)
		regexpInside := regexp.MustCompile(`[\s\p{Zs}]{2,}`)
		street := regexpLeadclose.ReplaceAllString(res.Datas[i].Place.Location.Street, "")
		street = regexpInside.ReplaceAllString(street, " ")
		location := res.Datas[i].Place.Name + ", " + street

		content += fmt.Sprintf(` - date: "%s"
   guests: "%s"
   location: "%s"
   name: "%s"
   link: "%s"
`,
			res.Datas[i].StartTime,
			strconv.Itoa(res.Datas[i].AttendingCount),
			location,
			res.Datas[i].Name,
			"https://facebook.com/events/"+res.Datas[i].ID)
	}

	return fmt.Sprintf(`---
key: events
list:
%s
---
`, content)
}
