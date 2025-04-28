package com.project.demo.controller;

import com.project.demo.entity.ArticleType;
import com.project.demo.service.ArticleTypeService;

import com.project.demo.controller.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

/**
 * 文章频道
 *
 */
@RestController
@RequestMapping("article_type")
public class ArticleTypeController extends BaseController<ArticleType, ArticleTypeService> {
    /**
     * 服务对象
     */
    @Autowired
    public ArticleTypeController(ArticleTypeService service) {
        setService(service);
    }

}


