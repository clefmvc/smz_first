package com.project.demo.entity;

import com.alibaba.fastjson.annotation.JSONField;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.*;

import java.io.Serializable;
import java.sql.Timestamp;


/**
 * 交流论坛：(ExchangeForum)表实体类
 *
 */
@TableName("`exchange_forum`")
@Data
@EqualsAndHashCode(callSuper = false)
public class ExchangeForum implements Serializable {

    // ExchangeForum编号
    @TableId(value = "exchange_forum_id", type = IdType.AUTO)
    private Integer exchange_forum_id;

    // 普通用户
    @TableField(value = "`ordinary_user`")
    private Integer ordinary_user;
    // 用户姓名
    @TableField(value = "`user_name`")
    private String user_name;
    // 用户电话
    @TableField(value = "`user_phone`")
    private String user_phone;
    // 用户性别
    @TableField(value = "`user_gender`")
    private String user_gender;
    // 论坛标题
    @TableField(value = "`forum_title`")
    private String forum_title;
    // 交流类型
    @TableField(value = "`type_of_communication`")
    private String type_of_communication;
    // 发布日期
    @TableField(value = "`release_date`")
    private Timestamp release_date;
    // 封面图片
    @TableField(value = "`cover_image`")
    private String cover_image;
    // 内容详情
    @TableField(value = "`content_details`")
    private String content_details;


    // 点赞数
    @TableField(value = "praise_len")
    private Integer praise_len;

    // 收藏数
    @TableField(value = "collect_len")
    private Integer collect_len;

    // 评论数
    @TableField(value = "comment_len")
    private Integer comment_len;
















	


	// 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;

}
