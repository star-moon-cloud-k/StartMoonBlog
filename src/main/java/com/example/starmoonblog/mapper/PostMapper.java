package com.example.starmoonblog.mapper;

import com.example.starmoonblog.dao.BoardPostDao;
import com.example.starmoonblog.dto.PostDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
@Mapper
public interface PostMapper {
    public List<HashMap<String, Object>> selectEmployees() throws Exception;
    public void postInsert(BoardPostDao boardPostDao) throws Exception;
}
