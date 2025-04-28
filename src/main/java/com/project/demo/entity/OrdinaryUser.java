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
 * 普通用户：(OrdinaryUser)表实体类
 *
 */
@TableName("`ordinary_user`")
@Data
@EqualsAndHashCode(callSuper = false)
public class OrdinaryUser implements Serializable {

    // OrdinaryUser编号
    @TableId(value = "ordinary_user_id", type = IdType.AUTO)
    private Integer ordinary_user_id;

    // 用户姓名
    @TableField(value = "`user_name`")
    private String user_name;
    // 用户电话
    @TableField(value = "`user_phone`")
    private String user_phone;
    // 用户性别
    @TableField(value = "`user_gender`")
    private String user_gender;









    // 用户编号
    @TableField(value = "user_id")
    private Integer userId;











	


	// 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;

}
