package com.example.starmoonblog.controller;


import com.example.starmoonblog.dto.CommentDTO;
import com.example.starmoonblog.dto.PostDTO;
import com.example.starmoonblog.service.PostService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class PostController {

    @Resource
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/api/posts")
    public ArrayList<PostDTO> PostList(@RequestParam int page) throws Exception{
        ArrayList<PostDTO> list = postService.selectAll();
        return list;
    }

    @GetMapping("/api/post")
    public PostDTO PostRead(@RequestParam int id) throws Exception{
        PostDTO list = postService.selectPost(id);


        return list;
    }
    @PostMapping("/api/post")
    public Map<String, Integer> PostWrite(@RequestBody PostDTO postDTO) throws Exception{
        Map<String, Integer> key = new HashMap<>();
        key.put("ID",postService.insertPost(postDTO));

        return key;
    }
    @DeleteMapping("/api/post")
    public void PostDelete(@RequestParam int id) throws Exception{
        postService.deletePost(id);
    }

    @PostMapping("/api/comment")
    public CommentDTO PostComment(@RequestBody CommentDTO commentDTO) throws Exception{
        System.out.println(commentDTO);
        postService.insertComment(commentDTO);
        System.out.println(commentDTO);


        return commentDTO;
    }
    @GetMapping("/api/comments")
    public List<CommentDTO> ReadComment(@RequestParam int id) throws Exception{
        System.out.println(id);
        List<CommentDTO> commentDTOList = postService.selectComments(id);
////        key.put("ID",postService.insertPost(commentDTO));

        return commentDTOList;
    }
}
