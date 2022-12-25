package com.example.starmoonblog.service;

import com.example.starmoonblog.dao.BoardPostDao;
import com.example.starmoonblog.dto.CommentDTO;
import com.example.starmoonblog.dto.PostDTO;
import com.example.starmoonblog.mapper.PostMapper;
import com.example.starmoonblog.module.GetTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class PostServiceIm implements PostService {
    @Autowired
    private PostMapper postMapper;

    @Override
    public ArrayList<PostDTO> selectAll() throws Exception {
        ArrayList<PostDTO> postDTO = postMapper.selectPostList();

        return postDTO;
    }

    @Override
    public int insertPost(PostDTO postDTO) throws Exception {
        BoardPostDao boardPostDao = new BoardPostDao();
        boardPostDao.setPost_title(postDTO.getTitle());
        boardPostDao.setPost_content(postDTO.getBody());

        GetTime now = new GetTime();
        boardPostDao.setPost_date(now.nowTime());
        boardPostDao.setPost_updated_date(now.nowTime());
        boardPostDao.setPost_comment_updated_date(now.nowTime());
        try{
            postMapper.postInsert(boardPostDao);
            int post_id =postMapper.selectKey()-1;
            postDTO.setId(post_id);
            for(String tag : postDTO.getTags()){
                HashMap<String, Object> map = new HashMap<>();
                map.put("id",post_id);
                map.put("tag",tag);
                postMapper.postTagInsert(map);
            }
            return post_id;
        }catch (Exception e){
            throw e;
        }
    }

    @Override
    public PostDTO selectPost(int id) throws Exception {
        PostDTO postDTO = new PostDTO();
        try {
            BoardPostDao boardPostDao = postMapper.selectPost(id);
            postDTO.setId(boardPostDao.getPost_id());
            postDTO.setPublishedDate(boardPostDao.getPost_date());
            postDTO.setTitle(boardPostDao.getPost_title());
            postDTO.setBody(boardPostDao.getPost_content());
            List<HashMap<String, Object>> tags =  postMapper.selectPostTags(postDTO.getId());
            List<String> tag = new ArrayList<>();
            postDTO.setTags(tag);
            for(HashMap<String, Object> tagMap : tags) {
                postDTO.getTags().add((String) tagMap.get("tag"));
            }
        } catch (Exception e) {
            throw e;
        }
        return postDTO;
    }

    @Override
    public void deletePost(int id) throws Exception {
        postMapper.deletePost(id);
    }

    @Override
    public void insertComment(CommentDTO commentDTO) throws Exception {
        int number = postMapper.selectCommentCount(commentDTO.getPostId());
        commentDTO.setCommentNumber(++number);
        postMapper.insertComment(commentDTO);
    }

    @Override
    public List<CommentDTO> selectComments(int id) throws Exception {
        List<CommentDTO> commentDTOList = postMapper.selectComments(id);
        return commentDTOList;
    }
}
