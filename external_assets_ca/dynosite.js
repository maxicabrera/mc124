(function(e,t,n,r){"use strict";var i=function(){};var s=function(i,s){if(i.hasClass(s.slides_container_class)){return this}var f=this,l,c=i,h,p,d,v=0,m,g,y=false,b=false;c.children().first().addClass(s.active_slide_class);f.update_slide_number=function(t){if(s.slide_number){h.find("span:first").text(parseInt(t)+1);h.find("span:last").text(c.children().length)}if(s.bullets){p.children().removeClass(s.bullets_active_class);e(p.children().get(t)).addClass(s.bullets_active_class)}};f.update_active_link=function(t){var n=e('a[data-orbit-link="'+c.children().eq(t).attr("data-orbit-slide")+'"]');n.parents("ul").find("[data-orbit-link]").removeClass(s.bullets_active_class);n.addClass(s.bullets_active_class)};f.build_markup=function(){c.wrap('<div class="'+s.container_class+'"></div>');l=c.parent();c.addClass(s.slides_container_class);if(s.navigation_arrows){l.append(e('<a href="#"><span></span></a>').addClass(s.prev_class));l.append(e('<a href="#"><span></span></a>').addClass(s.next_class))}if(s.timer){d=e("<div>").addClass(s.timer_container_class);d.append("<span>");d.append(e("<div>").addClass(s.timer_progress_class));d.addClass(s.timer_paused_class);l.append(d)}if(s.slide_number){h=e("<div>").addClass(s.slide_number_class);h.append("<span></span> "+s.slide_number_text+" <span></span>");l.append(h)}if(s.bullets){p=e("<ol>").addClass(s.bullets_container_class);l.append(p);p.wrap('<div class="orbit-bullets-container"></div>');c.children().each(function(t,n){var r=e("<li>").attr("data-orbit-slide",t);p.append(r)})}if(s.stack_on_small){l.addClass(s.stack_on_small_class)}f.update_slide_number(0);f.update_active_link(0)};f._goto=function(t,n){if(t===v){return false}if(typeof g==="object"){g.restart()}var r=c.children();var i="next";y=true;if(t<v){i="prev"}if(t>=r.length){t=0}else if(t<0){t=r.length-1}var o=e(r.get(v));var u=e(r.get(t));o.css("zIndex",2);o.removeClass(s.active_slide_class);u.css("zIndex",4).addClass(s.active_slide_class);c.trigger("before-slide-change.fndtn.orbit");s.before_slide_change();f.update_active_link(t);var a=function(){var e=function(){v=t;y=false;if(n===true){g=f.create_timer();g.start()}f.update_slide_number(v);c.trigger("after-slide-change.fndtn.orbit",[{slide_number:v,total_slides:r.length}]);s.after_slide_change(v,r.length)};if(c.height()!=u.height()&&s.variable_height){c.animate({height:u.height()},250,"linear",e)}else{e()}};if(r.length===1){a();return false}var l=function(){if(i==="next"){m.next(o,u,a)}if(i==="prev"){m.prev(o,u,a)}};if(u.height()>c.height()&&s.variable_height){c.animate({height:u.height()},250,"linear",l)}else{l()}};f.next=function(e){e.stopImmediatePropagation();e.preventDefault();f._goto(v+1)};f.prev=function(e){e.stopImmediatePropagation();e.preventDefault();f._goto(v-1)};f.link_custom=function(t){t.preventDefault();var n=e(this).attr("data-orbit-link");if(typeof n==="string"&&(n=e.trim(n))!=""){var r=l.find("[data-orbit-slide="+n+"]");if(r.index()!=-1){f._goto(r.index())}}};f.link_bullet=function(t){var n=e(this).attr("data-orbit-slide");if(typeof n==="string"&&(n=e.trim(n))!=""){f._goto(parseInt(n))}};f.timer_callback=function(){f._goto(v+1,true)};f.compute_dimensions=function(){var t=e(c.children().get(v));var n=t.height();if(!s.variable_height){c.children().each(function(){if(e(this).height()>n){n=e(this).height()}})}c.height(n)};f.create_timer=function(){var e=new o(l.find("."+s.timer_container_class),s,f.timer_callback);return e};f.stop_timer=function(){if(typeof g==="object")g.stop()};f.toggle_timer=function(){var e=l.find("."+s.timer_container_class);if(e.hasClass(s.timer_paused_class)){if(typeof g==="undefined"){g=f.create_timer()}g.start()}else{if(typeof g==="object"){g.stop()}}};f.init=function(){f.build_markup();if(s.timer){g=f.create_timer();g.start()}m=new a(s,c);if(s.animation==="slide")m=new u(s,c);l.on("click","."+s.next_class,f.next);l.on("click","."+s.prev_class,f.prev);l.on("click","[data-orbit-slide]",f.link_bullet);l.on("click",f.toggle_timer);if(s.swipe){l.on("touchstart.fndtn.orbit",function(e){if(!e.touches){e=e.originalEvent}var t={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:r};l.data("swipe-transition",t);e.stopPropagation()}).on("touchmove.fndtn.orbit",function(e){if(!e.touches){e=e.originalEvent}if(e.touches.length>1||e.scale&&e.scale!==1)return;var t=l.data("swipe-transition");if(typeof t==="undefined"){t={}}t.delta_x=e.touches[0].pageX-t.start_page_x;if(typeof t.is_scrolling==="undefined"){t.is_scrolling=!!(t.is_scrolling||Math.abs(t.delta_x)<Math.abs(e.touches[0].pageY-t.start_page_y))}if(!t.is_scrolling&&!t.active){e.preventDefault();var n=t.delta_x<0?v+1:v-1;t.active=true;f._goto(n)}}).on("touchend.fndtn.orbit",function(e){l.data("swipe-transition",{});e.stopPropagation()})}l.on("mouseenter.fndtn.orbit",function(e){if(s.timer&&s.pause_on_hover){f.stop_timer()}}).on("mouseleave.fndtn.orbit",function(e){if(s.timer&&s.resume_on_mouseout){g.start()}});e(n).on("click","[data-orbit-link]",f.link_custom);e(t).on("resize",f.compute_dimensions);e(t).on("load",f.compute_dimensions);e(t).on("load",function(){l.prev(".preloader").css("display","none")});c.trigger("ready.fndtn.orbit")};f.init()};var o=function(e,t,n){var r=this,i=t.timer_speed,s=e.find("."+t.timer_progress_class),o,u,a=-1;this.update_progress=function(e){var t=s.clone();t.attr("style","");t.css("width",e+"%");s.replaceWith(t);s=t};this.restart=function(){clearTimeout(u);e.addClass(t.timer_paused_class);a=-1;r.update_progress(0)};this.start=function(){if(!e.hasClass(t.timer_paused_class)){return true}a=a===-1?i:a;e.removeClass(t.timer_paused_class);o=(new Date).getTime();s.animate({width:"100%"},a,"linear");u=setTimeout(function(){r.restart();n()},a);e.trigger("timer-started.fndtn.orbit")};this.stop=function(){if(e.hasClass(t.timer_paused_class)){return true}clearTimeout(u);e.addClass(t.timer_paused_class);var n=(new Date).getTime();a=a-(n-o);var s=100-a/i*100;r.update_progress(s);e.trigger("timer-stopped.fndtn.orbit")}};var u=function(t,n){var r=t.animation_speed;var i=e("html[dir=rtl]").length===1;var s=i?"marginRight":"marginLeft";var o={};o[s]="0%";this.next=function(e,t,n){e.animate({marginLeft:"-100%"},r);t.animate(o,r,function(){e.css(s,"100%");n()})};this.prev=function(e,t,n){e.animate({marginLeft:"100%"},r);t.css(s,"-100%");t.animate(o,r,function(){e.css(s,"100%");n()})}};var a=function(t,n){var r=t.animation_speed;var i=e("html[dir=rtl]").length===1;var s=i?"marginRight":"marginLeft";this.next=function(e,t,n){t.css({margin:"0%",opacity:"0.01"});t.animate({opacity:"1"},r,"linear",function(){e.css("margin","100%");n()})};this.prev=function(e,t,n){t.css({margin:"0%",opacity:"0.01"});t.animate({opacity:"1"},r,"linear",function(){e.css("margin","100%");n()})}};Foundation.libs=Foundation.libs||{};Foundation.libs.orbit={name:"orbit",version:"5.0.0",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:true,resume_on_mouseout:false,animation_speed:500,stack_on_small:false,navigation_arrows:true,slide_number:true,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:true,timer:true,variable_height:false,swipe:true,before_slide_change:i,after_slide_change:i},init:function(t,n,r){var i=this;i.data_options=function(t){function a(e){return!isNaN(e-0)&&e!==null&&e!==""&&e!==false&&e!==true}function f(t){if(typeof t==="string")return e.trim(t);return t}var n={},r,i,s,o,u=t.data("options");if(typeof u==="object"){return u}s=(u||":").split(";"),o=s.length;for(r=o-1;r>=0;r--){i=s[r].split(":");if(/true/i.test(i[1]))i[1]=true;if(/false/i.test(i[1]))i[1]=false;if(a(i[1]))i[1]=parseInt(i[1],10);if(i.length===2&&i[0].length>0){n[f(i[0])]=f(i[1])}}return n};if(typeof n==="object"){e.extend(true,i.settings,n)}if(e(t).is("[data-orbit]")){var o=e(t);var u=i.data_options(o);new s(o,e.extend({},i.settings,u))}e("[data-orbit]",t).each(function(t,n){var r=e(n);var o=i.data_options(r);new s(r,e.extend({},i.settings,o))})}}})(jQuery,this,this.document)

var MTD = MTD || {};
    MTD.dynosite = {};

(function (mtd) {
  // shortened namespaced Product Results variable for use with code below
  var dynosite = mtd.dynosite;

  // shared component variables
  var $dynosite = $('.model-detail'),
      $tabs = $dynosite.find('.vertical-tabs'),
      $tabContent = $dynosite.find('.tab-content'),
      $imageViewer = $('.product-image-viewer'),
      $mainImage = $('#viewer-main-image'),
      thumbClass = '.tmb-nav a',
      $thumbLinks = $imageViewer.find(thumbClass),
      $diagnoseModal = $('#diagnose-troubleshoot-modal'),
      causesActionsId = '#causes-actions',
      commonSymptomsClass = '.common-symptoms',
      imageLargerClass = '.img-view-larger',
      activeClass = 'active',
      contentClass = 'tab-content',
      openClass = 'open',
      showClass = 'show',
      hideClass = 'hide';

  dynosite.loader = {
    init: function() {
      dynosite.tabs.init();
      dynosite.images.init();
      dynosite.diagnoseModal.init();
      dynosite.modal.init();
    }
  },
  dynosite.tabs = {
    init: function() {
      this.click();
      this.handleHashLink();
    },
    click: function() {
      $tabs.on('click', 'a', function(e) {
        var url = new URI($(this).attr('href')),
            hash = url.hash();
        e.preventDefault();
        dynosite.tabs.setActiveTab($(this), hash);
        // update url with hash
        //CHANGED: Do not update url with hash
        /*if (Modernizr.history) {
          history.pushState(null, null, hash);
        }else {
          window.location = hash;
        }*/
      });     
    },
    handleHashLink: function() {
      var url = new URI(),
          hash = url.hash();

      if (hash) {
        var $link = $tabs.find('[href="' + hash + '"]');
        dynosite.tabs.setActiveTab($link, hash);
      }  
    },
    setActiveTab: function($link, hashLink) {
      // remove active tab
      $tabs.find('li').removeClass(activeClass);
      // set active tab
      $link.parent().addClass(activeClass);
      // remove open class on tab content
      $tabContent.removeClass(openClass);
      // add open class to selected tab content
      $(hashLink).addClass(openClass);
    }
  },
  dynosite.images = {
    init : function () {
      this.clickThumb();
      this.clickLarge();
    },
    clickLarge : function() {
      $imageViewer.on('click', imageLargerClass, function(e) {
        e.preventDefault();
        var modalHtml = '<div style="position:absolute;left:0; right:0;margin-left:auto;margin-right:auto;" class="reveal-modal"><div class="reveal-title"><h1>' + $(this).attr('title') + 
          '</h1><a class="close-reveal-modal close-btn"><i class="icon icon-circle-x"></i></a></div>' +
          '<div class="reveal-content"><img src="' + $(this).attr('href') + '" /></div></div>';

        $('.reveal-modal').remove();
        $(modalHtml)
          .appendTo('body')
          .foundation('reveal', 'open');
      });      
    },
    clickThumb : function(e) {
      $imageViewer.on('click', thumbClass, function(e) {
        e.preventDefault();
        var $thumb = $(this);

        if(! $thumb.hasClass(activeClass)) {
          $mainImage.addClass(hideClass);
          //CHANGED: from '/>') to '>')
          $('<img src=' + $thumb.data('image-view') + '>').load(function () {
            var $fullImgLink = $mainImage.find('a'),
                $fullImg = $mainImage.find('img');

            if ($fullImgLink.length) {
              $fullImgLink.attr('href', $thumb.data('image-xl')).attr('title', $thumb.attr('title'));
            }
            $fullImg.attr('src', $(this).attr('src'));
            $thumbLinks.removeClass(activeClass);
            $thumb.addClass(activeClass);
            $mainImage.addClass(showClass).removeClass(hideClass);
          });
        }
      });
    }
  },
  dynosite.diagnoseModal = {
    init : function() {
      this.open();
      this.close();
    },
    open : function() {
      $(document).on('opened', $diagnoseModal, function(e) {
        $(commonSymptomsClass).on('click', 'a', function(e) {
          e.preventDefault();
          dynosite.diagnoseModal.loadContent($(this));
        });
      });
    },
    close : function() {
      $(document).on('close', $diagnoseModal, function(e) {
        $(commonSymptomsClass).off('click', 'a', function(e) {
          dynosite.diagnoseModal.loadContent($(this));
        });
      });
    },
    loadContent : function(link) {
      var $link = $(link),
          $diagnoseModalDetail = $(causesActionsId),
          $commonSymptomsLinks = $(commonSymptomsClass).find('a');

      if(! $link.hasClass(activeClass)) {
        $commonSymptomsLinks.removeClass(activeClass);
        $link.addClass(activeClass);
        $.get($link.attr('href')).done(function(data) {
          $diagnoseModalDetail.html(data);
        });
      }
    }    
  },
  dynosite.modal = {
    dom : {
      MODAL_CONTAINER: '.reveal-modal',
      MODAL_TRIGGER: $('[data-reveal-modal]')
    },
    init : function () {
      this.openModal();
    },
    openModal : function () {
      var loader = $('<div />');
      this.dom.MODAL_TRIGGER.on('click', function(e) {
        e.preventDefault();
        $(dynosite.modal.dom.MODAL_CONTAINER).remove();
        loader.load($(this).attr('href'), function () {
          $(this).find(dynosite.modal.dom.MODAL_CONTAINER).appendTo('body').foundation('reveal', 'open', function () {
            mtdcheckout.validate.refresh();
          });
        });
      });
    }
  }
} (MTD));

$(function() {

  MTD.dynosite.loader.init();

});
