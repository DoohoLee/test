(function($){
  $(document).ready(function(){
    rangeSlider();
    slicerTool.init();
    slicerInfo.init();
    btn_cancel();
    nonePlaceholder();
    autoFocusing();
    reSizing();
    //toggle();
  });

  function rangeSlider() {
    var range = $('.slicer-range input[type="range"]');
    range.rangeslider({
      polyfill: false,
      onInit: function() {
        var handle = this.$range.find('.rangeslider__handle');
        var tooltip = '<div class="rangeslider__tooltip"><span>Total Layers</span><div class="tooltip">' + this.value + '</div></div>'
        handle.append(tooltip);
      },
      onSlide: function(position, value) {
        var tooltip = this.$range.find('.rangeslider__tooltip .tooltip');
        tooltip.text(this.value);
      },
      onSlideEnd: function(position, value) {
      }
    });
    $('input[type="range"]').val(250).change();
    $('.tooltip').text('MAX');
  }

  $(document).on('input', '#slice_knife', function() {
    if ($('#slice_knife').val() == $('#slice_knife').attr('max')) {
      $('.tooltip').html('MAX');
    }
  });

  var slicerTool =  {
    activeClass: 'slicer-tool__button--active',
    viewClass: 'is-edit-tool-view',
    toolButtons: null,
    editTools: null,
    editLayerWrap: null,
    editLayers: null,
    init: function() {
      var view;
      var body = $('body');
      this.toolButtons = $('.slicer-tool__button');
      this.editTools = $('.slicer-edit');
      // 2018.07.27 수정
      this.editLayerWrap = $('.edit-tool-layer', this.editTools);
      this.editLayers = this.editLayerWrap.find('.slicer-tool-layer__box');
      $('.is-layer', this.editTools).each(function(index, el) {
        $(el).on('click', function() {
          $('.support-info-layer').attr('style', 'display: none;');
          //2018.08.22 이진필 - 같거나 다른 툴 버튼을 클릭시에 Add Support창이 사라지는 기능 추가.
          if(view === index) {
            slicerTool.onHide(body);
            view = '';
          } else {
            slicerTool.onActive($(this));
            slicerTool.onShow(body, index);
            view = index;
          }
        });
      });
      this.toolButtons.not('.is-layer').on('click', function() {
        slicerTool.onActive($(this));
        slicerTool.onHide(body);
        view = '';
      });
      var layer = $('.support-info-layer');
      layer.hide();
      $('.tool-support').on('click', '.btn-add-info', function(){
        layer.show();
        $('.tool-support-info .slicer-tool-layer__top').html("Add Support");
        $('.support-info-layer .btn-add').html("Add");
      });
      $('.tool-support').on('click', '.btn-edit-info', function(){
        layer.show();
        $('.tool-support-info .slicer-tool-layer__top').html("Edit Support");
        $('.support-info-layer .btn-add').html("Save");
      });
    },
    onActive: function(el) {
      this.toolButtons.removeClass(this.activeClass);
      el.addClass(this.activeClass);
    },
    onHide: function(context, index) {
      context.removeClass(this.viewClass);
      $('.is-layer').removeClass('slicer-tool__button--active');
      //2018.08.21 이진필 - 같은 툴 버튼을 클릭시에 툴의 활성화 클래스가 제거되는 기능 추가.
    },
    onShow: function(context, index) {
      context.addClass(this.viewClass);
      this.editLayers.hide();
      this.editLayers.eq(index).show();
      // 2018.07.27 수정
      //2018.08.30 이진필 - 반응형 추가.
      this.editLayerWrap.css('top', (parseInt($('.is-layer').css('height'))+1) * index + 'px');
      if (innerHeight < 661) {
        if (index > 1) {
          var divHeight = parseInt($('.slicer-tool-layer').css('height')),
          downIndex = $('.is-layer').length - index;
          $('.slicer-tool-layer').css('top', 256 - divHeight + 'px');
          $('.direction').css('top', 13.5 + divHeight - 51 * downIndex + 'px');
        } else {
          $('.direction').css('top', '13.5px');
        }
      }
    }
  }

  //2018.08.22 이진필 - Cancel 버튼 클릭시에 Add Support창이 사라지는 기능 추가.
  var btn_cancel = function() {
    $('.btn-cancel').on('click', function() {
      $('.support-info-layer').attr('style', 'display: none;');
    });
  };

  //2018.08.22 이진필 - 토글 기능 추가.
  /*var toggle = function() {
    $('.is-layer1').on('click', function() {
      $(this).toggleClass('slicer-tool__button--active');
    });
  };*/


  //2018.08.22 이진필 - 하단 메뉴 텍스트를 클릭해도 열리도록 수정.
  var slicerInfo = {
    openClass: 'information-area--view',
    init: function() {
      var content = $('.slicer-bottom');
      var contentTop = $('.slicing-information__top', content);
      $('li', contentTop).each(function(index, el) {
        $(el).on('click', function(){
          var obj = $('.slicing-information');
          if(obj.hasClass('information-area--view')===false) {
            obj.toggleClass(slicerInfo.openClass);
            document.querySelector('.slicing-information__top').dataset.slicingView = index;
            //메뉴가 닫혀있는 경우. 어떤 메뉴를 열고있는지는 상관하지 않음.
            //메뉴 열고 클릭한 메뉴로 변경.
            if(index<2) {
              $('.slicing-information__top li').addClass('active');
              //선택한 메뉴가 3D Slicing Info 또는 Material Profile일 경우.
              //3D Slicing Info와 Material Profile에 active class 추가.
            } else {
              $('.file-information__top li').addClass('active');
              //선택한 메뉴가 File Information일 경우.
              //File Information에 active class 추가.
            }
          } else if($('.slicing-information__top').attr("data-slicing-view")!=index) {
            document.querySelector('.slicing-information__top').dataset.slicingView = index;
            //메뉴가 열려있고 선택한 메뉴와 선택되어있던 메뉴가 다른 경우.
            //메뉴를 열어놓은 상태를 유지하고 메뉴만 변경.
          } else {
            obj.toggleClass(slicerInfo.openClass);
            $('.information-area__top li').removeClass('active');
            setTimeout(function() {
                $('.slicing-information__top').attr('data-slicing-view', -1)
             }, 200);
            //메뉴가 열려있고 선택한 메뉴와 선택되어있던 메뉴가 같은 경우.
            //메뉴창을 닫음.
            //information-area__top의 모든 li 요소들의 active 클래스를 제거한다.
          }
        });
      });
    }
  }
//2018.08.24 이진필 - 플레이스홀더 사라지는 기능 추가.
  var nonePlaceholder = function() {
    var toolInput = $('.slicer-tool-layer__input .input')
    toolInput.on('focus', function() {
      var index = toolInput.index(this);
      var ph = toolInput.eq(index).attr('placeholder');
      toolInput.eq(index).attr('placeholder', '');
      toolInput.eq(index).focusout(function() {
        toolInput.eq(index).attr('placeholder', ph);
      });
    });
  }

  var autoFocusing = function () {
	    var btn = $('.is-layer');

	    btn.click(function(e) {
	      var index = btn.index(this);

	      if (index ===0) {$('#x_position').trigger('focus');} //Move
	      if (index ===1) {$('#x_rotate').trigger('focus');} //Rotate
	      if (index ===2) {$('#x_scale').trigger('focus');} //Scale
	      if (index ===4) {$('#toolDuplicateQ').trigger('focus');} //Duplicate
	    });
	  };

    $(window).resize(function() {
      //2018.08.30 이진필 - 뷰 프리셋 버튼 위치 재조정.
      reSizing();
    });

    var reSizing = function() {
      //2018.08.30 이진필 - 뷰 프리셋 버튼 위치 재조정.
      if (innerWidth < 1231) {
        $('.slicer-tool-a').css('margin-top', innerHeight - parseInt($('.slicer-positions').css('height')) - 200 + 'px');
        $('.slicer-tree__contents').css('height', innerHeight - parseInt($('.slicer-positions').css('height')) - 250 + 'px');
      } else {
        $('.slicer-tool-a').css('margin-top', innerHeight - parseInt($('.slicer-positions').css('height')) - 170 + 'px');
        $('.slicer-tree__contents').css('height', innerHeight - parseInt($('.slicer-positions').css('height')) - 220 + 'px');
      }
    };
}(jQuery));
