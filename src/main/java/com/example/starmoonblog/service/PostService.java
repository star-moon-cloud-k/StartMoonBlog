package com.example.starmoonblog.service;

import com.example.starmoonblog.dao.BoardPostDao;
import com.example.starmoonblog.dto.PostDTO;

import java.util.HashMap;
import java.util.List;

public interface PostService {
    public List<HashMap<String, Object>> selectAll() throws Exception;
    public void insertPost(PostDTO postDTO) throws Exception;
}
