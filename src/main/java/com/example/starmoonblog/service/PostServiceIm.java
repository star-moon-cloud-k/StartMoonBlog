package com.example.starmoonblog.service;

import com.example.starmoonblog.dao.BoardPostDao;
import com.example.starmoonblog.dto.PostDTO;
import com.example.starmoonblog.mapper.PostMapper;
import com.example.starmoonblog.module.GetTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostServiceIm implements PostService {
    @Autowired
    private PostMapper postMapper;

    @Override
    public ArrayList<PostDTO> selectAll() throws Exception {
        ArrayList<PostDTO> postDTO = postMapper.selectEmployees();

        return postDTO;
    }

    @Override
    public void insertPost(PostDTO postDTO) throws Exception {
        BoardPostDao boardPostDao = new BoardPostDao();
        boardPostDao.setPost_title(postDTO.getTitle());
        boardPostDao.setPost_content(postDTO.getBody());

        GetTime now = new GetTime();
        boardPostDao.setPost_date(now.nowTime());
        boardPostDao.setPost_updated_date(now.nowTime());
        boardPostDao.setPost_comment_updated_date(now.nowTime());
        postMapper.postInsert(boardPostDao);
    }

    @Override
    public PostDTO selectPost(int id) throws Exception {
        BoardPostDao boardPostDao = postMapper.selectPost(id);
        PostDTO postDTO = new PostDTO();
        postDTO.setId(boardPostDao.getPost_id());
        postDTO.setPublishedDate(boardPostDao.getPost_date());
        postDTO.setTitle(boardPostDao.getPost_title());
        postDTO.setBody(boardPostDao.getPost_content());
        return postDTO;
    }
}
