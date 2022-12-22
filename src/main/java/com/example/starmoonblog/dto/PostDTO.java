package com.example.starmoonblog.dto;

import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PostDTO {
    private String title;
    private String body;
    private List<String> tags;
}
