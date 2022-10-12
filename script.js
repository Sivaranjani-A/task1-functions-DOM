var fname=createlabels("label","for","fname","firstname");
var br1=createlinebreak("br");
var input=createinput("input","type","text","id","fname");
var br2=createlinebreak("br");

var mname=createlabels("label","for","mname","middlename");
var br3=createlinebreak("br");
var input1=createinput("input","type","text","id","mname");
var br4=createlinebreak("br");

var lname=createlabels("label","for","lname","lastname");
var br5=createlinebreak("br");
var input2=createinput("input","type","text","id","lname");
var br6=createlinebreak("br");

var phone=createlabels("label","for","phone","phone number");
var br7=createlinebreak("br");
var input3=createinput("input","type","text","id","phone");
var br8=createlinebreak("br");




document.body.append(fname,br1,input,br2,mname,br3,input1,br4,lname,br5,input2,br6,phone,br7,input3,br8);


function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
//it is returning an HTML element
//<label for="email">Mail</label>

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}