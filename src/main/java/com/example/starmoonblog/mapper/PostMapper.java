package com.example.starmoonblog.mapper;

import com.example.starmoonblog.dao.BoardPostDao;
import com.example.starmoonblog.dto.PostDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
@Mapper
public interface PostMapper {
    public ArrayList<PostDTO> selectEmployees() throws Exception;
    public void postInsert(BoardPostDao boardPostDao) throws Exception;

//    public List<HashMap<String, Object>>
    BoardPostDao selectPost(int id) throws Exception;
}
