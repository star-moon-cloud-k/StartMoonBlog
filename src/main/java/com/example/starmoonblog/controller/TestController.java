package com.example.starmoonblog.controller;


import com.example.starmoonblog.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

@RestController
public class TestController {

    @Autowired
    @Resource
    private final TestService testService;

    public TestController(TestService testService) {
        this.testService = testService;
    }

    @GetMapping("/api/hello")
    public List<HashMap<String, Object>> Test() throws Exception{
        List<HashMap<String, Object>> list = testService.selectAll();
        return testService.selectAll();
    }
}
