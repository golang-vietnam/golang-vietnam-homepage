package models

// Data represents data object in JSON response from Facebook
type Data struct {
	AttendingCount int    `json:"attending_count"`
	ID             string `json:"id"`
	Place          Place  `json:"place"`
	StartTime      string `json:"start_time"`
	Name           string `json:"name"`
}
