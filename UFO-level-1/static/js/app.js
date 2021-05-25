// Starter Code
let tableData = data;


// tbody, input and button
let $tbody = d3.select("tbody");
let button = d3.select("#filter-btn");
let inputFieldDate = d3.select("#datetime");
let inputFieldCity = d3.select("#city");
let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Inputing the data into the HTML
let addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        let row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// Creating an Event Listener for the Button
// Setting up the Filter Button for Date and City
button.on("click", () => {

    d3.event.preventDefault();
    

    let inputDate = inputFieldDate.property("value").trim();
    // console.log(inputDate)
    // trim the inputs 
    let filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

    $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // add comment if not sightings
    
        else {
            $tbody.append("tr").append("td").text("No Sightings: Try a different date...");
        }
})