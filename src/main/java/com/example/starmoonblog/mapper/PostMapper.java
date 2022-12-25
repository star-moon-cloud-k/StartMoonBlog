package com.example.starmoonblog.mapper;

import com.example.starmoonblog.dao.BoardPostDao;
import com.example.starmoonblog.dto.CommentDTO;
import com.example.starmoonblog.dto.PostDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Repository
@Mapper
public interface PostMapper {
    ArrayList<PostDTO> selectPostList() throws Exception;
    int postInsert(BoardPostDao boardPostDao) throws Exception;
    void postTagInsert (HashMap map) throws Exception;

//    public List<HashMap<String, Object>>
    BoardPostDao selectPost(int id) throws Exception;
    int selectKey() throws Exception;
    List<HashMap<String, Object>> selectPostTags(int id) throws Exception;
    void deletePost(int id) throws Exception;
    void insertComment(CommentDTO commentDTO) throws Exception;

    int selectCommentCount(int postId) throws Exception;

    List<CommentDTO> selectComments(int postId) throws Exception;

}
