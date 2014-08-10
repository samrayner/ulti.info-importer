//Create a bookmarklet with this as the URL:
//javascript:!function(){function%20n(){a%3Cc.length%26%26(s.find(%22button:contains('Add')%22).click(),window.setTimeout(t,500,a),a++)}function%20t(n){var%20t=s.find(%22.row-statement:not(.no-instance):last%22);t.find(%22select:eq(0)%20option%22).eq(n+1).attr(%22selected%22,!0),t.find(%22.error:first%22).remove(),t.find(%22.cover:first%22).click(),window.setTimeout(i,500,c[n])}function%20i(n){$(%22.popup-content%22).find(%22input:first%22).val(n).keyup(),window.setTimeout(e,1500,n)}function%20e(t){var%20i=$(%22.popup-content%22).find(%22.options%20p:visible%22),e=!1;1==i.length%26%26(e=!0,i.click()),i.length%3E1%26%26i.each(function(){var%20n=$(this);n.text().toLowerCase()==t.toLowerCase()%26%26(e=!0,n.click())}),e||$(%22.popup%22).find(%22button:contains('Cancel')%22).click(),window.setTimeout(n,500)}var%20o=window.prompt(%22Paste%20final%20standings,%20one%20team%20per%20line.%22),c=o.split(%22\n%22).map(function(n){return%20n.trim()});c=c.filter(function(n){return%22%22!=n});var%20s=$(%22:header:contains('Final%20standing')%20+%20.statements%22),a=0;n()}();

var standings = window.prompt("Paste final standings, one team per line.");

var teamList = standings.split("\n").map(function(team){ return team.trim(); });
teamList = teamList.filter(function(n){ return n != "" });

var $parent = $(":header:contains('Final standing') + .statements");

var n = 0;

addNext();

function addNext() {
  if(n < teamList.length) {
    $parent.find("button:contains('Add')").click();
    window.setTimeout(selectNumber, 500, n);
    n++;
  }
}

function selectNumber(i) {
  var $row = $parent.find(".row-statement:not(.no-instance):last");
  $row.find("select:eq(0) option").eq(i+1).attr("selected", true);
  $row.find(".error:first").remove()

  $row.find(".cover:first").click();
  window.setTimeout(typeTeam, 500, teamList[i]);
}

function typeTeam(team) {
  $(".popup-content").find("input:first").val(team).keyup();
  window.setTimeout(selectTeamOrCancel, 1500, team);
}

function selectTeamOrCancel(team) {
  var $results = $(".popup-content").find(".options p:visible");
  var match = false;

  if($results.length == 1) {
    match = true;
    $results.click();
  }

  if($results.length > 1) {
    $results.each(function() {
      var $result = $(this);
      if($result.text().toLowerCase() == team.toLowerCase()) {
        match = true;
        $result.click();
      }
    });
  }

  if(!match) {
    $(".popup").find("button:contains('Cancel')").click();
  }

  window.setTimeout(addNext, 500);
}
