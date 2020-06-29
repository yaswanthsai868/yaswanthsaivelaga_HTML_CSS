checkRegistration=function ()
{
    let email=document.getElementById('email').value
    let name=document.getElementById('name').value
    let password=document.getElementById('password').value
    let confirmPassword=document.getElementById('repassword').value
    if(email=='')
    {
        alert('Please enter email')
    }
    else if(name=='')
    {
        alert('Please enter username')
    }
    else if(password=='')
    {
        alert('Please enter password')
    }
    else if(confirmPassword=='')
    {
        alert('Please enter password to confirm')
    }
    else
    {
        if(password!=confirmPassword)
        {
            alert('The entered passwords do not match')
        }
        else
        {
            alert('Form validation success')
        }
    }
}