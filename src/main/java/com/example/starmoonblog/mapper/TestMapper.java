package com.example.starmoonblog.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
@Mapper
public interface TestMapper {
    public List<HashMap<String, Object>> selectEmployees() throws Exception;
}
