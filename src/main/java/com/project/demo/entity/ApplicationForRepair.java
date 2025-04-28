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
 * 报修申请：(ApplicationForRepair)表实体类
 *
 */
@TableName("`application_for_repair`")
@Data
@EqualsAndHashCode(callSuper = false)
public class ApplicationForRepair implements Serializable {

    // ApplicationForRepair编号
    @TableId(value = "application_for_repair_id", type = IdType.AUTO)
    private Integer application_for_repair_id;

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
    // 报修类型
    @TableField(value = "`type_of_repair_report`")
    private String type_of_repair_report;
    // 报修次数
    @TableField(value = "`number_of_repair_reports`")
    private String number_of_repair_reports;
    // 报修图片
    @TableField(value = "`repair_picture`")
    private String repair_picture;
    // 报修地址
    @TableField(value = "`repair_address`")
    private String repair_address;
    // 故障描述
    @TableField(value = "`fault_description`")
    private String fault_description;





    // 审核状态
    @TableField(value = "examine_state")
    private String examine_state;



    // 审核回复
    @TableField(value = "examine_reply")
    private String examine_reply;











		// 维修记录限制次数
	@TableField(value = "repair_record_limit_times")
	private String repair_record_limit_times;
	
	


	// 更新时间
    @TableField(value = "update_time")
    private Timestamp update_time;

    // 创建时间
    @TableField(value = "create_time")
    private Timestamp create_time;

}
