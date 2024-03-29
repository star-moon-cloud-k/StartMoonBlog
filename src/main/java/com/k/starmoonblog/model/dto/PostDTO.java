package com.k.starmoonblog.dto;

import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PostDTO {
    private Integer id;
    private String title;
    private String body;
    private List<String> tags;
    private java.sql.Timestamp publishedDate;

}

