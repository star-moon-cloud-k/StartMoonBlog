package com.example.starmoonblog.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@AllArgsConstructor
@Getter
@Setter
public class CommentDTO {
    private Integer postId;
    private String name;
    private String comment;
    private Integer commentNumber;
}
