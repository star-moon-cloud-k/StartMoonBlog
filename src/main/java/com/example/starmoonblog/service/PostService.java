package com.example.starmoonblog.service;

import com.example.starmoonblog.dto.CommentDTO;
import com.example.starmoonblog.dto.PostDTO;

import java.util.ArrayList;
import java.util.List;

public interface PostService {
    ArrayList<PostDTO> selectAll() throws Exception;
    int insertPost(PostDTO postDTO) throws Exception;
    PostDTO selectPost(int id) throws Exception;
//    public List<HashMap<String, Object>> selectPost(int id) throws Exception;
    void deletePost(int id) throws Exception;
    void insertComment(CommentDTO commentDTO) throws Exception;
    List<CommentDTO> selectComments(int id) throws Exception;


}
