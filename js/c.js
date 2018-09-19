var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) { // Object.defineProperties 함수 : 접근자 속성 속성 값을 설정 하거나 검색할 때마다 사용자가 제공한 함수를 호출
                                                                                                    // Object.defineProperty 함수 : 개체에 새 속성을 추가, 개체에 지정된 속성 이름이 없을 때 수행. 기존 속성의 특성을 수정 개체에 지정된 속성 이름이 있을 때 수행
                                                                                                    // function 타입에 따라 Object.defineProperties 또는 Object.defineProperty 설정
    if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");   // throw 예외처리문 예외 발생시 에러문 표시
    a != Array.prototype && a != Object.prototype && (a[b] = c.value)                       // a 속성이 배열 그리고 오브젝트 속성이 아니고 a배열안의 b번째에 c의 value 값을 치환
},
// === : 값과 타입까지 비교
ba = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;   

function ca(a, b) {
    if (b) {

        for (var c = ba, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            f in c || (c[f] = {});
            c = c[f]
        }

        d = d[d.length - 1];
        e = c[d];
        f = b(e);
        f != e && null != f && aa(c, d, {
            configurable: !0,
            writable: !0,
            value: f
        })
    }
}
ca("Array.prototype.find", function(a) {
    return a ? a : function(a, c) { // a true a, false function(a,c)
        var b;
        a: {
            b = this;b instanceof String && (b = String(b));
            for (var e = b.length, f = 0; f < e; f++) {
                var h = b[f];
                if (a.call(c, h, f, b)) {
                    b = h;
                    break a
                }
            }
            b = void 0
        }
        return b
    }   
});

ca("Array.prototype.fill", function(a) {
    return a ? a : function(a, c, d) {
        var b = this.length || 0;
        0 > c && (c = Math.max(0, b + c));
        if (null == d || d > b) d = b;
        d = Number(d);
        0 > d && (d = Math.max(0, b + d));
        for (c = Number(c || 0); c < d; c++) this[c] = a;
        return this
    }
});

function g() {}

function k() {}

function l() {}

function n() {}

function p() {}

function q() {}

function r() {}

function t() {}

function da() {}
var u = 0,
v = 0,
x, y, ea = !1;

function z() {}
var A = 0,      //Number
    B = 0,      //Number  
    C = "",     //Streing
    D = [],     //Array
    E = [],     //Array
    F = -1,     //Number
    fa = !1,    //boolean
    ga = {      //Object
        x: 0,
        y: 0
    },
    G = [],     //Array
    H = [],     //Array
    I = [],     //Array
    J = 0,      //Number
    M = null,   //null;
    N, O;

$(function() {
    ha();
    ia();
    ja()
});

function ia() {
    if ($("#view_3d").length) { //id = view_3d에 값이 있으면 실행되는 조건문

        ka();
        la();
        ma();
        oa();
        pa();
        qa();
        ra();
        sa();

        g = new THREE.Scene;        //3D View 생성
        p = new THREE.Raycaster;    //광선 생성
        A = window.innerWidth;      //window View 넓이
        B = window.innerHeight;     //window View 높이

        l = new THREE.WebGLRenderer({   //WebGL 렌더링 생성자 생성
            antialias: !0
        });
        l.setSize(A, B);            // 렌더링할 사이즈 설정
        l.setPixelRatio(window.devicePixelRatio);       //장치 필셀 비율 설정

        $("#view_3d").html(l.domElement);
        ta();

        window.addEventListener("resize", function() {
            A = window.innerWidth;
            B = window.innerHeight;
            l.setSize(A, B);
            k.aspect = A / B;
            k.updateProjectionMatrix()
        });

        l.setClearColor(2834E3, 1);

        ua();
        va();
        wa();

        var a = new THREE.AxisHelper(100);      // 축 객체 생성(길이) x축은 빨간색, y축은 녹색, z축은 파란색
        g.add(a);

        xa();
        ya();
        n = new THREE.TrackballControls(k, l.domElement);   // 컨트롤러 설정
        n.rotateSpeed = 2;      // 회전 속도 설정
        n.f = 15;
        n.maxDistance = 1400;
        za();
        Aa();
        Ba();
        Ca()
    }
}

function pa() {
$(document).on("mouseenter", "#items .item", function() {
    "support" === $(this).data("type") ? Da($(this).data("key")) : "model" === $(this).data("type") && Ea($(this).data("key"))
}).on("mouseleave", "#items", function() {
    Fa()
}).on("click", "#items .copy", function(a) {

    a.preventDefault();
    a = $(this).parent().data("key");

    for (var b = 0; b < E.length; b++)
        if (E[b] == a) {
            b = D[b].clone();
            b.material = new THREE.MeshLambertMaterial({
                color: 6534741
            });
            a = (new Date).getTime();
            b.name = a;
            b.position.set(b.position.x + 10, b.position.y + 10, b.position.z);
            g.add(b);
            D.push(b);
            E.push(a);
            P();
            break
        }
}).on("click", "#items .model", function(a) {   // id = items, class = model을 클릭했을 때 실행
    a.preventDefault();
    "support" == C && (Ga(), Ha());
    if ("layout" == C || "support" == C) {
        R();
        a: {
            a = $(this).parent().data("key");
            for (var b = E.length - 1; 0 <= b; b--)
                if (E[b] === a) {
                    g.add(D[b]);
                    F = b;
                    a = !0;
                    break a
                }
            a = !1
        }!1 === a && (F = E.length - 1, g.add(D[F]))
    }
}).on("click", "#items .remove", function(a) {  // id = items , class = remove를 클릭했을 때 실행
    a.preventDefault();
    a = $(this).parent();
    if ("support" === a.data("type")) Ja(a.data("key")), S();
    else if ("model" === a.data("type")) {
        a = a.data("key");
        for (var b = E.length - 1; 0 <= b; b--) a == E[b] && (g.remove(D[b]), D.splice(b, 1), E.splice(b, 1));
        F = D.length - 1;
        S()
    }
    P()
}).on("click", "#items .toggle", function(a) {  // id = items, class = toggle 을 클릭했을 때 실행
    a.preventDefault();
    a = $(this).parent();
    var b = a.data("key");
    if (a.data("hide")) {
        a.data("hide", !1);
        for (var c = H.length - 1; 0 <= c; c--) b == H[c] && g.add(G[c])
    } else {
        for (c = H.length - 1; 0 <= c; c--) b == H[c] && g.remove(G[c]);
        a.data("hide", !0)
    }
});
}

function xa() {
    $(l.domElement).on("mousedown", function(a) {
        if ("support" == C) {
            if ($(document.elementFromPoint(a.clientX, a.clientY)).is("canvas")) {  // 클릭된 이벤트 a의 좌표 값이 "canvas" 안에 들어있는지 확인하는 조건문
                var b, c = (new Date).getTime();
                // 클릭한 마우스 좌표 계산
                a = new THREE.Vector3(a.clientX / window.innerWidth * 2 - 1, 2 * -(a.clientY / window.innerHeight) + 1, .5);
                p.setFromCamera(a.clone(), k);      // 광선을 새 원점 및 방향으로 설정 (a값과 동일한 좌표의 백터를 반환(a의 복사), k : 세팅된 카메라)
                a = p.intersectObjects([D[F]]);     // p의 좌표가 [D[F]]모델과 교차되는 좌표 값을 표시 a 에 저장 F = 배열의 몇번째인지를 표실할 Number값을 가짐
                var d = p.intersectObjects(G),      // p의 좌표가 G모델과 교차되는 좌표 값을 표시 d 에 
                    e;
                e = $("#support_types tr.selected").data("key");
                "undefined" === typeof e ? e = "" : (e = I[parseInt(e, 10)], e.head_len = parseFloat(e.head_len) || 0, e.penetration = parseFloat(e.penetration) ||
                    0, e.head_dia = parseFloat(e.head_dia) || 0, e.body_dia = parseFloat(e.body_dia) || 0, e.base_len = parseFloat(e.base_len) || 0, e.base_dia = parseFloat(e.base_dia) || 0, e.head_type = parseFloat(e.head_type) || 0, e.type = parseFloat(e.type) || 0);
                if ("" !== e && (0 !== a.length || 0 !== d.length)) {
                    0 < a.length && (b = a[0].point);
                    if (0 === e.type && 0 < e.body_dia && 0 < a.length) {
                        a = e;
                        d = 2 * b.z;
                        d = T(b.x, b.y, d);
                        d = T(b.x - a.body_dia / 2, b.y - a.body_dia / 2, d);
                        d = T(b.x + a.body_dia / 2, b.y + a.body_dia / 2, d);
                        d = T(b.x + a.body_dia / 2, b.y - a.body_dia / 2, d);
                        d = T(b.x - a.body_dia / 2, b.y + a.body_dia / 2, d);
                        
                        b.z = b.z != d ? d : b.z;
                        d = b.z - a.head_len - a.base_len + a.penetration;
                        e = new THREE.MeshLambertMaterial({color: 6711039});
                        var f;
                        f = 1 === a.head_type ? new THREE.SphereBufferGeometry(a.head_dia, 16, 16) : new THREE.CylinderBufferGeometry(a.head_dia, a.body_dia, a.head_len, 16);
                        f = new THREE.Mesh(f, e);
                        f.position.set(b.x, b.y, b.z - a.head_len / 2 + a.penetration);
                        Ka(f, c);
                        f = new THREE.CylinderBufferGeometry(a.body_dia, a.body_dia, d + .05, 16);
                        f = new THREE.Mesh(f, e);
                        f.position.set(b.x, b.y, b.z - a.head_len - d / 2 + a.penetration);
                        Ka(f,
                            c);
                        f = new THREE.CylinderBufferGeometry(a.base_dia, a.base_dia, a.base_len, 16);
                        e = new THREE.Mesh(f, e);
                        e.position.set(b.x, b.y, b.z - a.head_len - d - a.base_len / 2 + a.penetration);
                        Ka(e, c)
                    } else 0 === e.type && 0 < d.length ? (Fa(), 0 < d.length && Da(d[0].object.name)) : 1 === e.type && 0 < e.body_dia && (0 < d.length && (b = d[0].point), d = e, "" === U ? ($("body").css("cursor", "copy"), U = b.clone()) : (e = (new THREE.Vector3).subVectors(U, b), a = new THREE.Matrix4, a.lookAt(b, U, (new THREE.Object3D).up), a.multiply((new THREE.Matrix4).set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1)), d = new THREE.CylinderGeometry(d.body_dia, d.body_dia, e.length() + 2 * d.penetration, 8, 1), e = new THREE.MeshLambertMaterial({color: 6711039}), d = new THREE.Mesh(d, e), d.applyMatrix(a), d.position.x = (U.x + b.x) / 2, d.position.y = (U.y + b.y) / 2, d.position.z = (U.z + b.z) / 2, d.name = c, g.add(d), G.push(d), H.push(c), S()));
                    P()
                }
            }
        } else "plate" == C ? $(document.elementFromPoint(a.clientX, a.clientY)).is("canvas") && (c = new THREE.Vector3(a.clientX / window.innerWidth * 2 - 1, 2 * -(a.clientY / window.innerHeight) + 1, .5), p.setFromCamera(c.clone(),
            k), c = p.intersectObjects(D), 0 !== c.length && (La(a), Ma(), 0 < c.length && Ea(c[0].object.name), P())) : "layout" == C && La(a)
    });
}

function za() {
requestAnimationFrame(za);
l.render(g, k);
n.update()
}

function ua() {
    var a = new THREE.AmbientLight(6316128);    // 정면에 있는 모든 물체를 전체적으로 동일하게 비추는 함수
    g.add(a);
    a = new THREE.PointLight(6316128);          // 한 지점에서 모든 방향으로 방출되는 빛 .position.set으로 한 지점을 지정해줘야함
    a.position.set(-300, 300, 100);
    g.add(a);
    a = new THREE.PointLight(6316128);
    a.position.set(-300, 300, -100);
    g.add(a);
    a = new THREE.PointLight(6316128);
    a.position.set(300, -300, 100);
    g.add(a);
    a = new THREE.PointLight(6316128);
    a.position.set(-300, -300, 100);
    g.add(a)
}

function Ba() {
    Na("layout");
    $(".mode").on("click", function(a) {
        console.log("click");
        a.preventDefault();     // 브라우저의 행동을 막기 위한 함수
        C != $(this).data("mode") && Na($(this).data("mode"))
    })
}

function Na(a) {
    C = a;
    S();
    $(".mode").removeClass("selected");
    $(".mode").each(function() {
        $(this).data("mode") === a && $(this).addClass("selected")
    });
    "layout" == a ? (Ga(), R(), z.enabled = !1, Ha(), $("#support_box, #slider, #plate_box").hide(), $("#layout_box").show(), $("#resize").show(), n.reset()) : "support" == a ? (R(), 0 < D.length && (g.add(D[D.length - 1]), F = D.length - 1), z.enabled = !1, $("#layout_box, #plate_box").hide(), $("#support_box, #slider").show(), Oa(), Pa(), n.reset(), $("#resize").hide()) : "plate" == a && (Ga(), Ha(), $("#support_box, #slider, #layout_box").hide(),
        $("#plate_box").show(), Qa(), n.reset(), k.position.x = 0, k.position.y = 0, k.position.z = 300, Ra(), $("#resize").show());
    $("body").removeClass();
    $("body").addClass(a + "_mode");
    P()
}

function ta() {
k = new THREE.PerspectiveCamera(-25, A / B, .1, 2E4);
k.position.set(0, 140, 40);
g.add(k);
$(".cam-reset").on("click", function() {
    n.reset()
});
$(".cam-change").on("click", function() {
    var a = $(this),
        b = a.data("x"),
        c = a.data("y"),
        d = a.data("z");
    a.data("reset") && n.reset();
    k.position.x = b;
    k.position.y = c;
    k.position.z = d
})
}

function sa() {
$("#object-reset").on("click", function() {
    "undefined" !== typeof D[F].rotation && (D[F].rotation.x = 0, D[F].rotation.y = 0, D[F].rotation.z = 0)
})
}
$(function() {
N = {};
$(document).on("change keyup", "#resize input", function() {
    var a = $(this);
    if ($("#resize_ratio").is(":checked")) {
        var b = $("#resize_width").val();
        "resize_height" === a.attr("id") ? b = a.val() * N.a : "resize_length" === a.attr("id") && (b = a.val() * N.c);
        "resize_width" !== a.attr("id") && $("#resize_width").val(b.toString());
        "resize_height" !== a.attr("id") && $("#resize_height").val((b / N.a).toString());
        "resize_length" !== a.attr("id") && $("#resize_length").val((b / N.c).toString())
    }
});
$(document).on("click", "#resize_button",
    function() {
        var a;
        a: {
            a = O;
            for (var b = 0; b < E.length; b++)
                if (a === E[b]) {
                    a = b;
                    break a
                }
            a = -1
        }
        b = V(a);
        D[a].geometry.scale(($("#resize_width").val() / b.width).toString(), $("#resize_height").val() / b.height, $("#resize_length").val() / b.length);
        b = J;
        "plate" == C && (b = 0);
        D[a].position.set(D[a].position.x, D[a].position.y, b - D[a].geometry.boundingBox.min.z)
    })
});

function V(a) {
return {
    width: D[a].geometry.boundingBox.max.x - D[a].geometry.boundingBox.min.x,
    height: D[a].geometry.boundingBox.max.y - D[a].geometry.boundingBox.min.y,
    length: D[a].geometry.boundingBox.max.z - D[a].geometry.boundingBox.min.z
}
}

function Sa(a, b) {
var c = Math.floor(b * u + a);
return x.length < c ? 2 : x[c]
}

function Ta() {
x = new Uint8Array(Math.ceil(u * v));
y = parseInt($("#gap").val(), 10) / 2;
0 < y || (y = 0);
for (var a = [], b = 0; b < E.length; b++) {
    var c = V(b);
    a.push([c.width * c.height, b])
}
a.sort(function(a, b) {
    return b[0] - a[0]
});
a.forEach(function(a) {
    var b, c;
    a = a[1];
    b = V(a);
    a: {
        for (c = 0; c < u; c++)
            for (var d = 0; d < v; d++) {
                var m;
                if (m = !(0 < Sa(c, d))) b: {
                    for (m = c; m < c + (b.width + y); m++)
                        for (var X = d; X < d + (b.height + y); X++)
                            if (0 < Sa(m, X)) {
                                m = !1;
                                break b
                            }
                    m = !0
                }
                if (m) {
                    b = c;
                    c = d;
                    break a
                }
            }
        c = b = 0
    }
    d = b;
    b = c;
    c = V(a);
    m = c.width + y;
    for (var X = c.height + y, na = d; na <= d + m; na++)
        for (var Q =
                b; Q <= b + X; Q++) x[Math.floor(Q * u + na)] = 1;
    res = {
        x: d - u / 2,
        y: b - v / 2
    };
    D[a].position.set(res.x + c.width / 2, res.y + c.height / 2, D[a].position.z)
})
}

function Aa() {
x = new Uint8Array(Math.ceil(u * v));
x = new Uint8Array(Math.ceil(u * v));
$("#pack_btn").on("click", function() {
    Ta()
})
}

function ja() {
"" === W("dst") && ($("#save").hide(), $("#exit").hide());
$("body").delegate("#export", "click", function(a) {
    a.preventDefault();
    saveAs(Ua(), "export.stl")
}).delegate("#save", "click", function(a) {
    $("#save").hide();
    a.preventDefault();
    var b = W("dst");
    $.ajax({
        url: b,
        type: "POST",
        contentType: "application/octet-stream",
        data: Ua(),
        processData: !1
    }).done(function() {
        $("#save").show();
        window.location = b
    })
}).delegate("#exit", "click", function(a) {
    a.preventDefault();
    window.location = W("dst")
})
}

function Ua() {
Va();
g.remove(M);
var a = (new THREE.STLBinaryExporter).parse(g),
    a = new Blob([a], {
        type: "binary/stl"
    });
wa();
Pa();
return a
}
var U = "";

function S() {
U = "";
$("body").css("cursor", "auto")
}

function T(a, b, c) {
    var d = new THREE.Vector3(0, 0, 1);
    a = new THREE.Vector3(a, b, 0);
    
    p.set(a.clone(), d);        // 이곳에서 z값이 변환
    d = p.intersectObjects([D[F]]);
    
    for (a = d.length - 1; 0 <= a; a--) {
        d[a].point.z < c && (c = d[a].point.z);
    }
    return c
}

function Ka(a, b) {
    a.rotation.set(90 * Math.PI / 180, 0, 0);
    a.name = b;
    g.add(a);
    G.push(a);
    H.push(b)
    }

    function Ga() {
    if (G.length) {
        Va();
        g.remove(M);
        var a = (new THREE.STLBinaryExporter).parse(g);
        wa();
        g.remove(D[F]);
        D.splice(F, 1);
        E.splice(F, 1);
        Wa(a.buffer)
    }
}

function Ha() {
    $.each(G, function(a, b) {
        g.remove(b)
    });
    G = [];
    H = [];
    P()
}

function ma() {
    $(document).keyup(function(a) {
        if (46 == a.keyCode) {
            if ($(":focus").is("input")) return;
            O ? Ja(O) : 0 < H.length && Ja(H[H.length - 1]);
            S()
        }
        27 == a.keyCode && S()
    });
    $("#unify_base").on("click", function() {
        var a, b, c, d, e, f, h;
        Ja("unified_base");
        if (G.length) {
            for (var m = 0; m < G.length; m++) h = (new THREE.Box3).setFromObject(G[m]), m || (a = h.min.x, b = h.max.x, c = h.min.y, d = h.max.y, e = h.min.z, f = h.max.z), e > h.min.z && (e = h.min.z), f > h.max.z && (f = h.max.z), a > h.min.x && (a = h.min.x), b < h.max.x && (b = h.max.x), c > h.min.y && (c = h.min.y), d < h.max.y &&
                (d = h.max.y);
            h = new THREE.BoxBufferGeometry(b - a, d - c, f - e);
            m = new THREE.MeshLambertMaterial({
                color: 6711039
            });
            h = new THREE.Mesh(h, m);
            h.position.set((b + a) / 2, (d + c) / 2, (f + e) / 2);
            h.name = "unified_base";
            g.add(h);
            G.push(h);
            H.push("unified_base");
            P()
        }
    })
}

function Ja(a) {
    for (var b = H.length - 1; 0 <= b; b--) a == H[b] && (g.remove(G[b]), G.splice(b, 1), H.splice(b, 1));
    P()
}

function Da(a) {
    Fa();
    O = a;
    for (var b = 0; b < H.length; b++) a == H[b] && G[b].material.color.setHex(16737894)
}

function Fa() {
    for (var a = 0; a < H.length; a++) O == H[a] && G[a].material.color.setHex(6711039);
    O = ""
}

function va() {
    var a = W("width"),
        b = W("height");
    a || (a = 500);
    b || (b = 500);
    u = a;
    v = b;
    var c = new THREE.PlaneGeometry(a, b, 10, 10),
        d = [];
    d.push(new THREE.MeshBasicMaterial({
        color: 6710886,
        transparent: !0,
        opacity: .1
    }));
    var a = W("width"),
        b = W("height");
        a || (a = 500);
        b || (b = 500);
        u = a;
        v = b;
    var c = new THREE.PlaneGeometry(a, b, 10, 10),
        d = [];
    d.push(new THREE.MeshBasicMaterial({
        color: 6710886,
        transparent: !0,
        opacity: .1
    }));
    d.push(new THREE.MeshBasicMaterial({
        color: 0,
        transparent: !0,
        opacity: .1
    }));
    for (var e = c.faces.length / 2, f = 0; f < e; f++) j = 2 * f, c.faces[j].materialIndex = (f + Math.floor(f / 10)) % 2, c.faces[j + 1].materialIndex = (f + Math.floor(f / 10)) % 2;
    q = new THREE.Mesh(c, new THREE.MultiMaterial(d));
    r = new THREE.GridHelper(a / 2, a, 6316128, 6316128);
    r.geometry.rotateX(Math.PI / 2);
    r.position.z = -.2;
    t = new THREE.GridHelper(a / 2, a / 10, 9474192, 9474192);
    t.geometry.rotateX(Math.PI / 2);
    t.position.z = -.1;
    c = new THREE.Geometry;
    d = new THREE.LineBasicMaterial({
        color: 0
    });
    c.vertices.push(new THREE.Vector3(0 - a / 2, 0 - b / 2, 0));
    c.vertices.push(new THREE.Vector3(0 - a / 2, 0 + b / 2, 0));
    c.vertices.push(new THREE.Vector3(0 + a / 2, 0 + b / 2, 0));
    c.vertices.push(new THREE.Vector3(0 + a / 2, 0 - b / 2, 0));
    c.vertices.push(new THREE.Vector3(0 - a / 2, 0 - b / 2, 0));
    da = new THREE.Line(c, d);
    $(document).on("click", "#toggle_grid", Xa)
}

function wa() {
    g.add(q);
    g.add(da);
}

function Va() {
    g.remove(da);
    g.remove(q);
    Ya()
}

function Xa() {
if (ea) return g.add(q), Ya();
g.remove(q);
g.add(r);
g.add(t);
ea = !0
}

function Ya() {
g.remove(r);
g.remove(t);
ea = !1
}

function La(a) {
if (D.length) {
    var b = new THREE.Vector2;
    b.x = a.clientX / window.innerWidth * 2 - 1;
    b.y = 2 * -(a.clientY / window.innerHeight) + 1;
    1 == a.which && (p.setFromCamera(b, k), 0 < p.intersectObjects([D[F]]).length && (fa = !0, n.enabled = !1))
}
}

function ya() {
$(l.domElement).on("mousemove", function(a) {
    if (a.ctrlKey && "support" !== C) z.enabled = !1, Za(), z.enabled = !0;
    else if ("layout" === C) {
        if (fa && 0 < D.length) {
            var b = a.offsetX - ga.x,
                c = a.offsetY - ga.y,
                b = (new THREE.Quaternion).setFromEuler(new THREE.Euler(Math.PI / 180 * c * 1, Math.PI / 180 * b * 1, 0, "XYZ"));
            D[F].quaternion.multiplyQuaternions(b, D[F].quaternion)
        }
        ga = {
            x: a.offsetX,
            y: a.offsetY
        }
    }
});
$("#rotate_btn").on("click", function() {
    Za()
});
$(l.domElement).on("mouseup", function(a) {
    if ("layout" == C || a.ctrlKey) fa = !1, n.enabled = !0
})
}

function Za() {
"undefined" !== typeof D[F].rotation && (D[F].rotation.order = "YXZ", D[F].rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 60))
}

function Ea(a) {
    if ("plate" === C) {
        Ma();
        O = a;
        for (var b = 0; b < E.length; b++)
            if (a == E[b]) {
                F = b;
                D[b].material.color.setHex(16737894);
                var c = V(b);
                $("#resize_width").val(c.width);
                $("#resize_height").val(c.height);
                $("#resize_length").val(c.length);
                N.a = $("#resize_width").val() / $("#resize_height").val();
                N.c = $("#resize_width").val() / $("#resize_length").val()
            }
    }
}

function Ma() {
    for (var a = 0; a < E.length; a++) D[a].material.color.setHex(6534741);
    O = "";
}

function Qa() {
    z = new THREE.DragControls(D, k, l.domElement);
    z.addEventListener("dragstart", function() {
        n.enabled = !1
    });
    z.addEventListener("dragend", function() {
        n.enabled = !0
    });
}

function P() {
var a = 0,
    b = 0;
$("#items").html("");
$.each(D, function(b) {
    a++;
    $("#items").append('<div class="item" data-type="model" data-key="' + E[parseInt(b, 10)] + '"><a href="#" class="remove">X</a> <a href="#" class="model">Model ' + a + '</a> <a href="#" class="copy">C</a></div>')
});
b = a = 0;
$.each(G, function(c) {
    H[parseInt(c, 10)] != b && (a++, $("#items").append('<div class="item" data-type="support" data-key="' + H[parseInt(c, 10)] + '"><a href="#" class="remove">X</a> <a href="#" class="toggle">D</a> Support ' + a + "</div>"));
    b = H[parseInt(c, 10)]
})
}

function Ra() {
R();
$.each(D, function(a, b) {
    g.add(b)
});
F = D.length - 1
}

function R() {
    fa = !1;                // boolean false
    g.remove(M);            // g 않에 있는 M값을 제거
    $.each(D, function(a, b) {      // 유틸리티 메서드 .each(object, function(index, item))
        g.remove(b)
    })
}

function oa() {
$(document).on("click", "#support_types a", function(a) {
    a.preventDefault();
    $a($(this).data("key"))
}).on("click", "#new_support", function() {
    $a(-1)
}).on("click", "#support_close", function(a) {
    a.preventDefault();
    $("#support_add_box").fadeOut()
}).on("click", "#support_types tr", function() {
    $("#support_types tr").removeClass("selected");
    $(this).addClass("selected");
    S()
}).on("change keyup", "#support_add", function() {
    ab("support_preview", bb($("#support_add")))
}).on("submit", "#support_add", function(a) {
    a.preventDefault();
    a = $(this).find("input[type=submit]:focus").val();
    "Add" === a && cb(this);
    "Remove" === a && db();
    "Save" === a && (db(), cb(this));
    Oa();
    S();
    $("#support_add_box").fadeOut()
})
}

function $a(a) {
$("#support_add_box").fadeIn().data("key", a); - 1 !== a ? ($(".only_new").show(), $.each(I[a], function(a, c) {
    $("*[name=" + a + "]").val(c)
})) : $(".only_new").hide();
ab("support_preview", bb($("#support_add")))
}

function db() {
var a = $("#support_add_box").data("key");
I.splice(a, 1);
localStorage.setItem("support_types", JSON.stringify(I))
}

function ab(a, b) {
var c = document.getElementById(a),
    d = c.getContext("2d");
d.strokeStyle = "#FFFFFF";
d.fillStyle = "#FFFFFF";
d.clearRect(0, 0, c.width, c.height);
if (0 == b.type) {
    var e;
    e = b.head_dia;
    var f = b.body_dia;
    e = e > f ? e : f;
    f = b.base_dia;
    e = e > f ? e : f;
    f = 10 + b.head_len + b.base_len;
    c = c.width / f < c.height / e ? c.width / f : c.height / e;
    f = (e - b.base_dia) / 2;
    d.fillRect(0, f * c, b.base_len * c, b.base_dia * c);
    var h = b.base_len,
        f = (e - b.body_dia) / 2;
    d.fillRect(h * c, f * c, 10 * c, b.body_dia * c);
    h += 10;
    0 === b.head_type && (d.beginPath(), d.moveTo(h * c, (f + b.body_dia) *
        c), d.lineTo(h * c, f * c), f = (e - b.head_dia) / 2, d.lineTo((h + b.head_len) * c, f * c), d.lineTo((h + b.head_len) * c, (f + b.head_dia) * c), d.closePath(), d.fill(), h = h + b.head_len - b.penetration);
    1 === b.head_type && (f = e / 2, d.beginPath(), d.arc((h + b.head_len / 2) * c, f * c, b.head_dia / 2 * c, 0, 2 * Math.PI), d.stroke(), d.fill(), h = h + b.head_len / 2 - b.penetration);
    d.fillStyle = "#FF0000";
    d.strokeStyle = "#FF0000";
    d.beginPath();
    d.moveTo(h * c, 0);
    d.lineTo(h * c, e * c);
    d.stroke()
}
}

function cb(a) {
a = bb(a);
I.push(a);
localStorage.setItem("support_types", JSON.stringify(I));
Oa();
S()
}

function bb(a) {
var b = {};
$.each($(a).serializeArray(), function() {
    b[this.name] = "name" == this.name ? this.value : parseFloat(this.value)
});
return b
}

function Oa() {
var a = "",
    b = "",
    c = {};
I = JSON.parse(localStorage.getItem("support_types"));
for (var d = 0; d < I.length; d++) {
    var e = I[d];
    I.length == d + 1 && (b = "selected");
    0 == e.type ? (a += '<tr data-key="' + d + '" class="' + b + '"><td>' + e.name + '<td><canvas id="c' + d + '" width="100%" height="20"></canvas><td><a href="#" data-key="' + d + '">Edit</a></tr>', c[d] = ["c" + d, e]) : a += '<tr data-key="' + d + '" class="' + b + '"><td>' + e.name + "<td>" + e.body_dia + " / " + e.penetration + '<td><a href="#" data-key="' + d + '">Edit</a></tr>'
}
$("#support_types").html("<table><tr><td>-<td colspan='2'>Details</tr>" +
    a + "</table>");
$.each(c, function(a, b) {
    ab(b[0], b[1])
})
}

function la() {
$(".toggle_master").each(function() {
    eb($(this))
});
$("html").delegate(".toggle_master", "change", function() {
    eb($(this))
})
}

function eb(a) {
var b = a.attr("name"),
    c = a.val();
a.find("option").each(function() {
    var a = "." + b + "_" + $(this).val();
    $(this).val() == c ? $(a).show() : $(a).hide()
})
}

function qa() {
J = localStorage.getItem("model_height");
$("#start_height").val(J);
$("#helpModal").modal({
    show: !1
});
$("#model_elevate").on("click", function() {
    J = $("#start_height").val();
    localStorage.setItem("model_height", J);
    var a = (new THREE.Box3).setFromObject(D[F]);
    D[F].position.set(0, 0, J - a.min.sub(D[F].position).z)
});
$(".guide").on("click", function() {
    $("#helpModal").modal("show")
})
}
// id = reset 클릭 되면 fb()함수 호출
function ka() {     
$("#reset").on("click", function() {
    fb()    // lovalStorage로 2개의 key/value 생성 (model_height/5, support_types/ 서포트 타입에 대한 정보를 JSON으로 형식으로 저장)
});
localStorage.getItem("model_height") || fb()
}

// lovalStorage : 만료기간이 없는 데이터 저장하는 객체, setItem()과 getItem()으로 값으 저장하거나 가져올수 있다(저장되는 key/value모두 String으로 저장)
function fb() {
localStorage.setItem("model_height", 5);
localStorage.setItem("support_types", '[{"name":"Bridge","type":1,"head_type":0,"penetration":0.5,"body_dia":0.5},{"name":"Basic","type":0,"head_len":1.5,"penetration":0.5,"head_type":0,"head_dia":0.5,"body_dia":1.5,"base_len":0.5,"base_dia":3},{"name":"Basic 2","type":0,"head_len":1.5,"penetration":0.5,"head_type":1,"head_dia":2.1,"body_dia":1.5,"base_len":0.5,"base_dia":3}]')
}
var gb = function() {
function a(a) {
    function e(a) {
        a = m(a);
        if (!a) throw Error("Error on STL ACSII File");
        K++;
        return a
    }

    function m(a) {
        for (; Q[K].match(/^\s*$/);) K++;
        return Q[K].match(a)
    }
    f = [];
    h = [];
    var Q = b(new Uint8Array(a)),
        K = 0;
    a = /^\s*facet\s+normal\s+([^\s]+)\s+([^\s]+)\s+([^\s]+)/;
    var w = /^\s*vertex\s+([^s]+)\s+([^\s]+)\s+([^\s]+)/,
        L = new THREE.BufferGeometry;
    for (e(/^\s*solid\s(.*)/); !m(/^\s*endsolid/);) {
        var Y = e(a);
        e(/^\s*outer\s+loop/);
        var Z = e(w),
            Ia = e(w),
            ib = e(w);
        e(/\s*endloop/);
        e(/\s*endfacet/);
        d(Z);
        d(Ia);
        d(ib);
        c(Y)
    }
    L.addAttribute("position", new THREE.BufferAttribute(new Float32Array(f), 3));
    L.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(h), 3));
    return L
}

function b(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) 10 === a[d] && (b.push(String.fromCharCode.apply(null, a.subarray(c, d))), c = d + 1);
    b.push(String.fromCharCode.apply(null, a.subarray(c)));
    return b
}

function c(a) {
    var b = parseFloat(a[1]),
        c = parseFloat(a[2]);
    a = parseFloat(a[3]);
    h.push(b, c, a, b, c, a, b, c, a)
}

function d(a) {
    f.push(parseFloat(a[1]), parseFloat(a[2]),
        parseFloat(a[3]))
}

function e(a, b) {
    f.push(a.getFloat32(b + 0, !0), a.getFloat32(b + 4, !0), a.getFloat32(b + 8, !0))
}
var f = [],
    h = [];
return function(b) {
    try {
        return a(b)
    } catch (Ia) {
        f = [];
        h = [];
        b = new DataView(b);
        for (var c = b.getUint32(80, !0), d = new THREE.BufferGeometry, m = 84, K = 0; K < c; K++) {
            var w = b,
                L = m,
                Y = w.getFloat32(L + 0, !0),
                Z = w.getFloat32(L + 4, !0),
                w = w.getFloat32(L + 8, !0);
            h.push(Y, Z, w, Y, Z, w, Y, Z, w);
            e(b, m + 12);
            e(b, m + 24);
            e(b, m + 36);
            m += 50
        }
        d.addAttribute("position", new THREE.BufferAttribute(new Float32Array(f), 3));
        d.addAttribute("normal",
            new THREE.BufferAttribute(new Float32Array(h), 3));
        return d
    }
}
}();

function ha() {
    $("#support_file").on("change", function(a) {
        R();
        hb(a.target.files[0])
    });
    $("#plate_file").on("change", function(a) {
        for (var b = 0; b < a.target.files.length; b++) hb(a.target.files[b])
    });
    jb();
    var a = document.body;
    a.addEventListener("dragover", function(a) {
        a.stopPropagation();
        a.preventDefault();
        a.dataTransfer.dropEffect = "copy"
    });
    a.addEventListener("drop", function(a) {
        a.stopPropagation();
        a.preventDefault();
        hb(a.dataTransfer.files[0])
    });
}

function hb(a) {
    var b = new FileReader;
    b.addEventListener("load", function(a) {
        Wa(a.target.result)
    });
    b.readAsArrayBuffer(a)
}

function Wa(a) {
    var b = (new Date).getTime() + Math.random();
    a = gb(a);
    var c = new THREE.MeshLambertMaterial({
            color: 6534741
        }),
        c = new THREE.Mesh(a, c),
        d = J;
    if ("plate" == C || "support" == C) d = 0;
    a.center();
    c.position.set(0, 0, d - c.geometry.boundingBox.min.z);
    c.name = b;
    g.add(c);
    D.push(c);
    E.push(b);
    "support" !== C && (F = D.length - 1);
    P();
    Ea(b)
}

function W(a) {
    var b = decodeURIComponent(window.location.search.substring(1)).split("&"), 
    c, d;
    for (d = 0; d < b.length; d++)
        if (c = b[d].split("="), c[0] === a) return "undefined" === typeof c[1] ? "" : c[1];
    return ""
}

function jb() {
    var a = W("src");
    "" !== a && kb(a)
}

function kb(a) {
    var b = new XMLHttpRequest;
    b.open("GET", a, !0);
    b.responseType = "arraybuffer";
    b.onload = function() {
        200 == b.status && Wa(b.response)
    };
    b.send()
}

function Ca() {
    var a = W("models");
    "" !== a && (a = a.split(","), Na("plate"), a.forEach(function(a) {
        kb(a)
    }))
}

function Pa() {
    if (D.length) {
        g.remove(M);
        var a = (new THREE.Box3).setFromObject(D[D.length - 1]),
            b = a.max.x - a.min.x + 10,
            c = a.max.y - a.min.y + 10,
            d = new THREE.PlaneBufferGeometry(b, c);
        M = new THREE.Mesh(d, new THREE.MeshBasicMaterial({
            color: 16777215,
            transparent: !0,
            opacity: .8,
            side: THREE.DoubleSide
        }));
        M.position.set(a.min.x + b / 2 - 5, a.min.y + c / 2 - 5, 0);
        $("#slider").prop("max", a.max.z)
    }
}

function ra() {
    $("#slider").on("change mousemove", function() {
        var a = $(this).val();
        g.remove(M);
        M.position.z = a;
        g.add(M)
    })
};