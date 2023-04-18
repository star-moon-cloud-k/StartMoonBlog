package com.example.starmoonblog.module;

import java.text.SimpleDateFormat;
import java.util.Date;

public class GetTime {
    public java.sql.Timestamp nowTime(){
        Date nowDate = new Date();

        java.sql.Timestamp sqlTimeStamp = new java.sql.Timestamp(nowDate.getTime());
        return sqlTimeStamp;
    }


}
