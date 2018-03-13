console.log(dataSet);
pageSize = 1000;

data = dataSet.slice(0, pageSize);
data.forEach(function(e) {
  $('tbody').append(`<tr>
                        <td>${e.datetime}</td>
                        <td>${e.city}</td>
                        <td>${e.state}</td>
                        <td>${e.country}</td>
                        <td>${e.shape}</td>
                        <td>${e.durationMinutes}</td>
                        <td>${e.comments}</td>
                      </tr>`)
});

var i = 1;
while(dataSet.length > pageSize * i) {
  $('.pagination').append(`<li class="page-item"><a class="page-link" href="#">${i+1}</a></li>`);
  i++;
}

$("#filter_button").on("click", function() {
  $('tbody').empty();

  data = dataSet.filter(row => row.datetime == $('#date_filter').val() || $('#date_filter').val() == "")
  data = data.filter(row => row.city == $('#city_filter').val() || $('#city_filter').val() == "")
  data = data.filter(row => row.state == $('#state_filter').val() || $('#state_filter').val() == "")
  data = data.filter(row => row.country == $('#country_filter').val() || $('#country_filter').val() == "")
  data = data.filter(row => row.shape == $('#shape_filter').val() || $('#shape_filter').val() == "")

  data.slice(0, pageSize).forEach(function(e) {
    $('tbody').append(`<tr>
                        <td>${e.datetime}</td>
                        <td>${e.city}</td>
                        <td>${e.state}</td>
                        <td>${e.country}</td>
                        <td>${e.shape}</td>
                        <td>${e.durationMinutes}</td>
                        <td>${e.comments}</td>
                      </tr>`);
  })

  $('.pagination').empty();
  $('.pagination').append('<li class="page-item active"><a class="page-link" href="#">1</a></li>');

  var i = 1;
  while(data.length > pageSize * i) {
    $('.pagination').append(`<li class="page-item"><a class="page-link" href="#">${i+1}</a></li>`);
    i++;
  }
})

$('.page-link').click(function() {
  $('tbody').empty();

  $('.active').removeClass("active");
  $(this).parent().addClass("active");

  data = dataSet.slice(pageSize*($(this).text()-1), pageSize*$(this).text());
  data.forEach(function(e) {
    $('tbody').append(`<tr>
                          <td>${e.datetime}</td>
                          <td>${e.city}</td>
                          <td>${e.state}</td>
                          <td>${e.country}</td>
                          <td>${e.shape}</td>
                          <td>${e.durationMinutes}</td>
                          <td>${e.comments}</td>
                        </tr>`)
  });
})
