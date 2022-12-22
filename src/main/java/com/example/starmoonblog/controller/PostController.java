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

    @GetMapping("/api/hello")
    public List<HashMap<String , Object>> Test() throws Exception{
        List<HashMap<String, Object>> list = postService.selectAll();
//        ArrayList <HashMap<String, String>> list2= new ArrayList<>();
//        HashMap<String, String> map = new HashMap<>();
//        map.put("test", "test");
//        list2.add(map);

        return list;
    }
    @PostMapping("/api/posts")
    public List<HashMap<String, Object>> Test2(@RequestBody PostDTO postDTO) throws Exception{
        postService.insertPost(postDTO);

        return null;
    }
}
