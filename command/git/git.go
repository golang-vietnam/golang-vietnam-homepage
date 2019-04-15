package git

import (
	"fmt"
	"os"
	"path/filepath"
	"time"

	"gopkg.in/src-d/go-git.v4"
	"gopkg.in/src-d/go-git.v4/plumbing/object"
	"gopkg.in/src-d/go-git.v4/plumbing/transport/http"
)

// file names
var (
	dirName        = "golang-vietnam-homepage"
	sourcesDirName = "sources"
	eventsDirName  = "events"
	indexFileName  = "index.md"
)

type client struct {
	r *git.Repository
}

func NewClient() (*client, error) {
	notBare := false
	if oldDir, err := os.Stat(filepath.Join(os.TempDir(), dirName)); !os.IsNotExist(err) {
		if err := os.RemoveAll(filepath.Join(os.TempDir(), oldDir.Name())); err != nil {
			return nil, err
		}
	}

	r, err := git.PlainClone(filepath.Join(os.TempDir(), dirName), notBare, &git.CloneOptions{
		Auth: &http.BasicAuth{
			Username: os.Getenv("GITHUB_USERNAME"),
			Password: os.Getenv("GITHUB_TOKEN"),
		},
		URL:      os.Getenv("GOLANG_VIETNAM_HOMEPAGE_REPOSITORY"),
		Progress: os.Stdout,
	})
	if err != nil {
		return nil, err
	}

	return &client{
		r: r,
	}, nil
}

func (c *client) Commit(content string) error {
	w, err := c.r.Worktree()
	if err != nil {
		fmt.Println("cannot open Git worktree caused error: " + err.Error())
		return err
	}

	if err = os.Remove(filepath.Join(os.TempDir(), dirName, sourcesDirName, eventsDirName, indexFileName)); err != nil {
		fmt.Println("cannot open remove file caused error: " + err.Error())
		return err
	}

	f, err := os.Create(filepath.Join(os.TempDir(), dirName, sourcesDirName, eventsDirName, indexFileName))
	if err != nil {
		return err
	}
	defer f.Close()

	_, err = f.WriteString(content)
	if err != nil {
		return err
	}

	err = w.AddGlob(filepath.Join(sourcesDirName, eventsDirName, indexFileName))
	if err != nil {
		return err
	}

	commit, err := w.Commit(fmt.Sprintf("update %s", filepath.Join(sourcesDirName, eventsDirName, indexFileName)), &git.CommitOptions{
		Author: &object.Signature{
			Name:  "minhkhiemm",
			Email: "vominhkhiem212@gmail.com",
			When:  time.Now(),
		},
	})
	if err != nil {
		return err
	}

	_, err = c.r.CommitObject(commit)
	if err != nil {
		return err
	}

	err = c.r.Push(&git.PushOptions{
		RemoteName: "origin",
		Auth: &http.BasicAuth{
			Username: os.Getenv("GITHUB_USERNAME"),
			Password: os.Getenv("GITHUB_TOKEN"),
		},
	})
	if err != nil {
		return err
	}

	return nil
}
