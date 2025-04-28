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
 * 报修类型：(TypeOfRepairReport)表实体类
 *
 */
@TableName("`type_of_repair_report`")
@Data
@EqualsAndHashCode(callSuper = false)
public class TypeOfRepairReport implements Serializable {

    // TypeOfRepairReport编号
    @TableId(value = "type_of_repair_report_id", type = IdType.AUTO)
    private Integer type_of_repair_report_id;

    // 报修类型
    @TableField(value = "`type_of_repair_report`")
    private String type_of_repair_report;




















	


	// 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;

}
