Ulti.info Importer
==================

A bookmarklet for importing final standings into [Ulti.info](http://ulti.info)

To use it, create a bookmark with this as the URL:
```
javascript:!function(){function%20n(){r%3Cc.length%26%26(s.find(%22button:contains('Add')%22).click(),window.setTimeout(t,500,r),r++)}function%20t(n){var%20t=s.find(%22.row-statement:not(.no-instance):last%22);t.find(%22select:eq(0)%20option%22).eq(n+1).attr(%22selected%22,!0),t.find(%22.error:first%22).remove(),t.find(%22.cover:first%22).click(),window.setTimeout(i,500,c[n])}function%20i(n){$(%22.popup-content%22).find(%22input:first%22).val(n).keyup(),window.setTimeout(e,1500,n)}function%20e(t){var%20i=$(%22.popup-content%22).find(%22.options%20p:visible%22),e=$(%22.popup-content%22).find(%22.highlighted%22);1==i.length||e.text()==t%3Fe.click():$(%22.popup%22).find(%22button:contains('Cancel')%22).click(),window.setTimeout(n,500)}var%20o=window.prompt(%22Paste%20final%20standings,%20one%20team%20per%20line.%22),c=o.split(%22\n%22).map(function(n){return%20n.trim()});c=c.filter(function(n){return%22%22!=n});var%20s=$(%22:header:contains('Final%20standing')%20+%20.statements%22),r=0;n()}();
```

Run the bookmarklet when you need to enter final standings for a tournament. It will ask you to paste a list of team names and then do its thing.