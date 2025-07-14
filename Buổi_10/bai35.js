function doimau(giatri,duongdan)
{
if(giatri==1)
{ document.getElementById('frame').src=duongdan;
document.getElementById('gt').style.background="green";
document.getElementById('da').style.background="gray";
document.getElementById('st').style.background="gray";
}
else if(giatri==2)
{
document.getElementById('frame').src=duongdan;
document.getElementById('st').style.background="green";
document.getElementById('gt').style.background="gray";
document.getElementById('da').style.background="gray";
}
else if(giatri==3)
{
document.getElementById('frame').src=duongdan;
document.getElementById('da').style.background="green";
document.getElementById('gt').style.background="gray";
document.getElementById('st').style.background="gray";
}
}