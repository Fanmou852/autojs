launchApp("钉钉");

sleep(1000);

while (!click("计技193"));
sleep(1000);
click("群签到");
sleep(1000);
while (!click("目前健康状况"));
while (!click("健康"));
sleep(1000);
while (!click("目前所在区域风险等级"));
while (!click("低"));
sleep(1000);
className("android.widget.EditText").setText("36");
sleep(1000);
while(!click("签到"));
sleep(1000);
toast("签到成功");