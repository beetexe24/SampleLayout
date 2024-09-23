

class style{

    clickSelect()
    {
        let customselectparent = document.querySelectorAll(".custom-select-parent");
        if(customselectparent)
        {
            for(var i = 0; i < customselectparent.length; i++)
            {
                customselectparent[i].onclick = function(){

                    if(this.children[0].checked)
                        this.children[0].checked = false;
                    else
                        this.children[0].checked = true;
                };
            }
        }
    }

    clickSelectContent()
    {
        let selectcontent = document.querySelectorAll(".select-content > div");
        if(selectcontent)
        {
            for(var i = 0; i < selectcontent.length; i++)
            {
                selectcontent[i].onclick = function(){
                    var changeText = this.parentNode.parentNode.children[0];
                    changeText.value = this.innerText;
                }
            }
        }
    }



}

style = new style();
style.clickSelect();
style.clickSelectContent();