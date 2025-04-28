package com.project.demo.controller;

import com.project.demo.entity.Collect;
import com.project.demo.service.CollectService;

import com.project.demo.controller.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

/**
 * 收藏
 *
 */
@RestController
@RequestMapping("collect")
public class CollectController extends BaseController<Collect, CollectService> {
    /**
     * 服务对象
     */
    @Autowired
    public CollectController(CollectService service) {
        setService(service);
    }

}


