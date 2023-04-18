package com.k.starmoonblog.dao;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BoardPostDao {
    private Integer post_id;
    private String post_title;
    private String post_content;
    private java.sql.Timestamp post_date;
    private java.sql.Timestamp post_updated_date;
    private java.sql.Timestamp post_comment_updated_date;
    private Integer post_hit;
    private Integer post_like;
    private Integer post_del;
    private String bca_id;
    private Integer mem_id;
}
