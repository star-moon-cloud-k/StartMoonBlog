package com.example.starmoonblog.controller;


import com.example.starmoonblog.dto.PostDTO;
import com.example.starmoonblog.service.PostService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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
    public List<HashMap<String, Object>> PostWrite(@RequestBody PostDTO postDTO) throws Exception{
        postService.insertPost(postDTO);

        return null;
    }
}
