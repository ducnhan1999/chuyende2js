var dssv = [];
var listbox = [];
var listdel = [];
class SinhVien
{
    constructor(mssv, hoten, email)
    {
        this.mssv = mssv;
        this.hoten = hoten;
        this.email = email;
    }
}
function Update()
{
            document.getElementById("dssv").innerHTML = "";
            Show();
}
function Del()
    {
        var count = 0;
        for(i = 0; i < listbox.length; i++){
               
            if(listbox[i].checked == true){
                listdel[count] = i - count;
                count++; 
            }
        }
        for(i = 0; i < listdel.length; i++)
        {
                dssv.splice(listdel[i],1);
        }
        Update();
    }
    function Edit()
    {
        
    }
    function Show()
    {
        for(i=0;i<dssv.length;i++)
            {
                document.getElementById("dssv").innerHTML += "<input type='checkbox' name='delete'>" + dssv[i].mssv + " " + dssv[i].hoten + " " + dssv[i].email + " " + "<br/>";
            }
    }
function Save()
{

}
window.onload = function()
{
    var editID;
    var savebtn = document.getElementById("save");
    savebtn.disabled = true;
    var btndel = document.getElementById("del");
    var btnedit = document.getElementById("edit");
    listbox = document.getElementsByName("delete");
    var btnsubmit = document.getElementById("submit-btn");
    btnsubmit.onclick = function(e)
    {
        var mssv = document.getElementById("ma-sinh-vien").value;
        var hoten = document.getElementById("ho-va-ten").value;
        var email = document.getElementById("email").value;
        s = new SinhVien(mssv, hoten, email);
        dssv.push(s);
        len = dssv.length;
        document.getElementById("sinh-vien-form").reset();
        Update();
        //document.getElementById("dssv").innerHTML += "<input type='checkbox' name='delete'>" + s.mssv + " " + s.hoten + " " + s.email + " " + "<br/>";  
        e.preventDefault();
    }
    btnedit.onclick= function()
        {
            Edit();
        }
    btndel.onclick= function(e)
        {
            Del();
            e.preventDefault();
        }
    btnedit.onclick = function()
    {
        savebtn.disabled = false;
        btnsubmit.disabled = true;
        btndel.disabled = true;
        alert("nhap tren form");
        Show();
    }
    savebtn.onclick = function()
    {
        savebtn.disabled = true;
        btnsubmit.disabled = false;
        btndel.disabled = false;
        Save();
    }
}
