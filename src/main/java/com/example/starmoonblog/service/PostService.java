package com.example.starmoonblog.service;

import com.example.starmoonblog.dto.PostDTO;

import java.util.ArrayList;

public interface PostService {
    public ArrayList<PostDTO> selectAll() throws Exception;
    public void insertPost(PostDTO postDTO) throws Exception;
    public PostDTO selectPost(int id) throws Exception;
//    public List<HashMap<String, Object>> selectPost(int id) throws Exception;

}
