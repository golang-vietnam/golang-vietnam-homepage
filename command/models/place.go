package models

// Place represents place JSON object
type Place struct {
	Name     string   `json:"name"`
	Location Location `json:"location"`
	ID       string   `json:"id"`
}
