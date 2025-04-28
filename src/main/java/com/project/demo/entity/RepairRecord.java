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
 * 报修记录：(RepairRecord)表实体类
 *
 */
@TableName("`repair_record`")
@Data
@EqualsAndHashCode(callSuper = false)
public class RepairRecord implements Serializable {

    // RepairRecord编号
    @TableId(value = "repair_record_id", type = IdType.AUTO)
    private Integer repair_record_id;

    // 普通用户
    @TableField(value = "`ordinary_user`")
    private Integer ordinary_user;
    // 用户姓名
    @TableField(value = "`user_name`")
    private String user_name;
    // 用户电话
    @TableField(value = "`user_phone`")
    private String user_phone;
    // 报修标题
    @TableField(value = "`repair_title`")
    private String repair_title;
    // 报修地址
    @TableField(value = "`repair_address`")
    private String repair_address;
    // 故障描述
    @TableField(value = "`fault_description`")
    private String fault_description;
    // 报修日期
    @TableField(value = "`repair_date`")
    private Timestamp repair_date;
    // 维修进度
    @TableField(value = "`maintenance_progress`")
    private String maintenance_progress;
    // 进度描述
    @TableField(value = "`progress_description`")
    private String progress_description;




















		// 来源表
	@TableField(value = "source_table")
	private String source_table;
	
	// 来源ID
	@TableField(value = "source_id")
	private Integer source_id;
	
	// 来源用户ID
	@TableField(value = "source_user_id")
	private Integer source_user_id;
	


	// 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;

}
