package com.example.starmoonblog.service;

import com.example.starmoonblog.mapper.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class TestServiceIm implements TestService{
    @Autowired
    private TestMapper testMapper;

    @Override
    public List<HashMap<String, Object>> selectAll() throws Exception {
        return testMapper.selectEmployees();
    }
}
