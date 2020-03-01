var id = document.getElementById("status");

var ap = [];

ap[0] = { subject: "United States Government and Politics", time: 50408, len: 225 };
ap[1] = { subject: "Physics C: Mechanics", time: 50412, len: 130 };
ap[2] = { subject: "Physics C: Electricity and Magnetism", time: 50414, len: 130 };
ap[3] = { subject: "Calculus AB", time: 50508, len: 315 };
ap[4] = { subject: "Calculus BC", time: 50508, len: 315 };
ap[5] = { subject: "German Language and Culture", time: 50512, len: 300 };
ap[6] = { subject: "Human Geography", time: 50512, len: 215 };
ap[7] = { subject: "English Literature and Composition", time: 50608, len: 300 };
ap[8] = { subject: "European History", time: 50612, len: 315 };
ap[9] = { subject: "Physics 2: Algebra-Based", time: 50612, len: 300 };
ap[10] = { subject: "Chemistry", time: 50708, len: 315 };
ap[11] = { subject: "Spanish Literature and Culture", time: 50708, len: 300 };
ap[12] = { subject: "Japanese Literature and Culture", time: 50712, len: 215 };
ap[13] = { subject: "Physics 1: Algebra-Based", time: 50712, len: 300 };
ap[14] = { subject: "United States History", time: 50808, len: 315 };
ap[15] = { subject: "Art History", time: 50812, len: 300 };
ap[16] = { subject: "Computer Science A", time: 50812, len: 300 };
ap[17] = { subject: "Biology", time: 51108, len: 300 };
ap[18] = { subject: "Chinese Language and Culture", time: 51112, len: 215 };
ap[19] = { subject: "Environmental Science", time: 51112, len: 300 };
ap[20] = { subject: "Spanish Language and Culture", time: 51208, len: 300 };
ap[21] = { subject: "Latin", time: 51212, len: 300 };
ap[22] = { subject: "Psychology", time: 51212, len: 200 };
ap[23] = { subject: "English Language and Composition", time: 51308, len: 315 };
ap[24] = { subject: "Microeconomics", time: 51312, len: 210 };
ap[25] = { subject: "Music Theory", time: 51312, len: 240 };
ap[26] = { subject: "Comparative Government and Politics", time: 51408, len: 225 };
ap[27] = { subject: "World History: Modern", time: 51408, len: 315 };
ap[28] = { subject: "Italian Language and Culture", time: 51412, len: 300 };
ap[29] = { subject: "Macroeconomics", time: 51412, len: 210 };
ap[30] = { subject: "Computer Science Principle", time: 51508, len: 200 };
ap[31] = { subject: "French Language and Culture", time: 51508, len: 300 };
ap[32] = { subject: "Statistics", time: 51512, len: 300 };

function comp(date, add) {
    var t = new Date();

    var cmm = t.getMonth();
    var cdd = t.getDate();
    var ch = t.getHours();
    var cm = t.getMinutes();
    var cs = t.getSeconds();

    var month = parseInt(date / 10000);
    var day = parseInt(date % 10000 / 100);
    var hour = date % 100 + parseInt(add / 100);
    var minute = add % 100;
    var second = 0;

    if (month - 1 < cmm)
        return 0;
    else if (month - 1 == cmm)
        if (day < cdd)
            return 0;
        else if (day == cdd)
        if (hour < ch)
            return 0;
        else if (hour == ch)
        if (minute < cm)
            return 0;
        else if (minute == cm)
        if (second < cs)
            return 0;

    return 1;
}

function dif(date) {
    var tmm = parseInt(date / 10000) - 1;
    var tdd = parseInt(date % 10000 / 100);
    var th = date % 100;
    var tm = 0;
    var ts = 0;

    var d = new Date();
    var cmm = d.getMonth();
    var cdd = d.getDate();
    var ch = d.getHours();
    var cm = d.getMinutes();
    var cs = d.getSeconds();

    var minus = 0;
    var imm, idd, ih, im, is;

    if (ts < cs) {
        is = ts - cs + 60;
        minus = 1;
    } else
        is = ts - cs;

    if (tm - minus < cm) {
        im = tm - minus - cm + 60;
        minus = 1;
    } else {
        im = tm - minus - cm;
        minus = 0;
    }

    if (th - minus < ch) {
        ih = th - minus - ch + 24;
        minus = 1;
    } else {
        ih = th - minus - ch;
        minus = 0;
    }

    if (tdd - minus < cdd) {
        idd = tdd - minus - cdd + md[tmm - 1];
        minus = 1;
    } else {
        idd = tdd - minus - cdd;
        minus = 0;
    }

    imm = tmm - minus - cmm;

    iww = parseInt(idd / 7);

    var ans = '';

    if (imm < 10)
        ans += '0';

    ans += imm;

    if (iww < 10)
        ans += '0';

    ans += iww;

    if (idd < 10)
        ans += '0';

    ans += idd;

    if (ih < 10)
        ans += '0';

    ans += ih;

    if (im < 10)
        ans += '0';

    ans += im;

    if (is < 10)
        ans += '0';

    ans += is;

    return ans;
}

function ap_status() {
    var str = '';

    for (var i = 0; i < ap.length; i++) {
        str += "<tr>";

        str += `<th> ${ ap [ i ].subject } </th>`;

        str += `<th> ${ parseInt ( ap [ i ].time / 10000 ) }/${ parseInt ( ap [ i ].time % 10000 / 100 ) } ${ ap [ i ].time % 100 }:00 </th> `;

        var temp = dif(ap[i].time);

        var imm = parseInt(temp.substr(0, 2));
        var iww = parseInt(temp.substr(2, 2));
        var idd = parseInt(temp.substr(4, 2));
        var ih = parseInt(temp.substr(6, 2));
        var im = parseInt(temp.substr(8, 2));
        var is = parseInt(temp.substr(10, 2));

        if (!comp(ap[i].time, ap[i].len))
            str += "<th class = 'end' > Ended </th>";
        else if (!comp(ap[i].time, 0))
            str += "<th class = 'ongoing' > Ongoing </th>";
        else if (imm > 1)
            str += `<th> ${ imm } Months </th>`;
        else if (imm == 1)
            str += `<th> ${ imm } Month </th>`;
        else if (iww > 1)
            str += `<th> ${ iww } Weeks </th>`;
        else if (iww == 1)
            str += `<th> ${ iww } Week </th>`;
        else if (idd > 1)
            str += `<th> ${ idd } Days </th>`;
        else if (idd == 1)
            str += `<th> ${ idd } Day </th>`;
        else {
            str += "<th class = 'urgent' >"

            if (ih < 10) str += '0';

            str += `${ ih }:`

            if (im < 10) str += '0';

            str += `${ im }:`

            if (is < 10) str += '0';

            str += `${ is } </th>`;
        }

        str += "</tr>";
    }

    id.innerHTML = str;
}

ap_status();