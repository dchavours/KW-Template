webpackJsonp([1],{168:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){e.preventDefault(),c(s("name"),s("company"),s("email"),s("phone"),s("message")),document.querySelector(".alert").style.display="block",setTimeout(function(){document.querySelector(".alert").style.display="none"},3e3),document.getElementById("contactForm").reset()}function s(e){return document.getElementById(e).value}function c(e,t,i,n,o){b.push().set({name:e,company:t,email:i,phone:n,message:o})}Object.defineProperty(t,"__esModule",{value:!0});var l=i(1),u=i.n(l),d=i(68),p=i(435),f=i(70),h=i(166),v=i(436),m=i(104),w=function(e){function t(i){n(this,t);var r=o(this,e.call(this,i));return r.url=window.location.href,r.$reviewLink=u()('[data-reveal-id="modal-review-form"]'),r}return r(t,e),t.prototype.before=function(e){var t=this;u()(document).on("close.fndtn.reveal",function(){-1!==t.url.indexOf("#write_review")&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,document.title,window.location.pathname)}),e()},t.prototype.loaded=function(e){var t=this,i=void 0;Object(f.b)(),this.productDetails=new h.a(u()(".productView"),this.context,window.BCData.product_attributes),Object(v.a)();var n=Object(m.b)(".writeReview-form"),o=new p.a(n);u()("body").on("click",'[data-reveal-id="modal-review-form"]',function(){i=o.registerValidation(t.context)}),n.on("submit",function(){return!!i&&(i.performCheck(),i.areAll("valid"))}),e()},t.prototype.after=function(e){this.productReviewHandler(),e()},t.prototype.productReviewHandler=function(){-1!==this.url.indexOf("#write_review")&&this.$reviewLink.trigger("click")},t}(d.a);t.default=w,u()(document).ready(function(){u()("#specialId").click(function(){u()(".ogClosed").css("display","block")})});var y={apiKey:"AIzaSyCiNBQ6_V7a2V7wpvigxFP3MsZgdT3fvNk",authDomain:"kw-graphics-server.firebaseapp.com",databaseURL:"https://kw-graphics-server.firebaseio.com",projectId:"kw-graphics-server",storageBucket:"kw-graphics-server.appspot.com",messagingSenderId:"334742471890"};firebase.initializeApp(y);var b=firebase.database().ref("messages");document.getElementById("contactForm").addEventListener("submit",a),u()(document).ready(function(){u()("#contactForm").submit(function(){console.log("Submitted"),u()("#firebase-submit").replaceWith(" Submission Confirmed &#x2713;"),u()("#contactForm").trigger("reset")})})},435:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=i(1),r=i.n(o),a=i(69),s=i(70),c=i(163),l=function(){function e(t){n(this,e),this.validator=Object(a.a)({submit:t.find('input[type="submit"]')}),this.$reviewsContent=r()("#product-reviews"),this.$collapsible=r()("[data-collapsible]",this.$reviewsContent),this.initLinkBind(),this.injectPaginationLink(),this.collapseReviews()}return e.prototype.initLinkBind=function(){var e=this,t=r()("#productReviews-content",this.$reviewsContent);r()(".productView-reviewLink").on("click",function(){t.hasClass("is-open")||e.$collapsible.trigger(s.a.click)})},e.prototype.collapseReviews=function(){window.location.hash&&0===window.location.hash.indexOf("#product-reviews")||this.$collapsible.trigger(s.a.click)},e.prototype.injectPaginationLink=function(){var e=r()(".pagination-item--next .pagination-link",this.$reviewsContent),t=r()(".pagination-item--previous .pagination-link",this.$reviewsContent);e.length&&e.attr("href",e.attr("href")+" #product-reviews"),t.length&&t.attr("href",t.attr("href")+" #product-reviews")},e.prototype.registerValidation=function(e){return this.context=e,this.validator.add([{selector:'[name="revrating"]',validate:"presence",errorMessage:this.context.reviewRating},{selector:'[name="revtitle"]',validate:"min-length:2",errorMessage:this.context.reviewSubject},{selector:'[name="revtext"]',validate:"min-length:2",errorMessage:this.context.reviewComment},{selector:'[name="email"]',validate:function(e,t){e(c.a.email(t))},errorMessage:this.context.reviewEmail}]),this.validator},e.prototype.validate=function(){return this.validator.performCheck()},e}();t.a=l},436:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){a()("[data-videoGallery]").each(function(e,t){var i=a()(t);i.data("videoGallery")instanceof s||i.data("videoGallery",new s(i))})}t.a=o;var r=i(1),a=i.n(r),s=function(){function e(t){n(this,e),this.$player=t.find("[data-video-player]"),this.$videos=t.find("[data-video-item]"),this.currentVideo={},this.bindEvents()}return e.prototype.selectNewVideo=function(e){e.preventDefault();var t=a()(e.currentTarget);this.currentVideo={id:t.data("videoId"),$selectedThumb:t},this.setMainVideo(),this.setActiveThumb()},e.prototype.setMainVideo=function(){this.$player.attr("src","//www.youtube.com/embed/"+this.currentVideo.id)},e.prototype.setActiveThumb=function(){this.$videos.removeClass("is-active"),this.currentVideo.$selectedThumb.addClass("is-active")},e.prototype.bindEvents=function(){this.$videos.on("click",this.selectNewVideo.bind(this))},e}()}});
