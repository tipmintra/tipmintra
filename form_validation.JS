function formValidation()
{
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var sex = document.registration.sex;

    if (userid_validation(uid,5,12)==false)
    {
        return false
    }
    if (passid_validation(passid,7,12)==false)
    {
        return false
    }
    if (allLetter(uname)==false)
    {
        return false
    }
    if (alphanumeric(uadd)==false)
    {
        return false
    }
    if(countryselect(ucountry)==false)
    {
        return false
    }
    if (allnumeric(uzip)==false)
    {
        return false
    }
    if (ValidateEmail(uemail)==false)
    {
        return false
    }
    if (validsex(sex)==false)
    {
        return false
    }
    alert('Form Successfully Submitted');

    window.location.href="submit.html";

    return false
    
}
function loginform(){
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    if (userid_validation(uid,5,12)==false)
    {
        return false
    }
    if (passid_validation(passid,7,12)==false)
    {
        return false
    }
    alert('Form Successfully Submitted');

    window.location.href="submit.html";

    return false

}



function userid_validation(uid,mx,my)
{
    var uid_len = uid.value.length;

    if(uid_len == 0 || uid_len >= my || uid_len <mx)

        {

            alert("User Id should not be empty / length be between "+mx+" to "+my);

            uid.focus();

            return false;

        }

    return true;

}

function passid_validation(passid,mx,my)

{

    var passid_len = passid.value.length;

    if(passid_len == 0 || passid_len >= my || passid_len <mx)

        {

            alert("Password should not be empty / length be between "+mx+" to "+my);

            passid.focus();

            return false;

        }

        return true;

}

function allLetter(uname)

{

    var letters = /^[A-Za-z]+$/;

    if(uname.value.match(letters))

    {

        return true;

    }

    else

    {

        alert('Username must have alphabet charcters only');

        uname.focus();

        return false;

    }

}

function alphanumeric(uadd)

{

    var letters = /^[0-9a-zA-Z]+$/;

    if  (uadd.value.match(letters))

    {

        return true;

    }

    else

    {

        alert('User address must have alphanumeric characters only');

        uadd.focus();

        return false;

    }

}

function countryselect(ucountry)

{

    if (ucountry.value == "Default")

    {

        alert('Select your country from the list');

        ucountry.focus();

        return false;

    }

    else

    {

        return true;

    }

}

function allnumeric(uzip)
{
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('ZIP code must have numeric characters only');

        uzip.focus();

        return false;
    }
}

function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert('You have entered an invalid email address!');

        uemail.focus();

        return false;
    }
}
function validsex(sex)
{
    x=0;

    if (sex[0].checked)
    {
        x++;
    }
    if (sex[1].checked)
    {
        x++;
    }
    if (x==0)
    {
        alert('Select Male/Female');

        sex[0].focus();

        return false;
    }
    else
    {
        return true;
    }
}


