

var path = require('path');
var qs = require('querystring');

var async = require('async');
var bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var colors = require('colors');
var cors = require('cors');
var express = require('express');
var logger = require('morgan');
var moment = require('moment');
var request = require('request');
var fs = require('fs');
var timer = require('moment-timer');

//var config = require('./config');
var AWS = require('aws-sdk');
var s3  = new AWS.S3();

process.env.AWS_ACCESS_KEY_ID     = 'AKIAJOCPSMABDI3KRLMQ';
process.env.AWS_SECRET_ACCESS_KEY = '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';
process.env.AWS_REGION            = 'us-east-1';

// AWS.config.update({
//     accessKeyId: "AKIAJOCPSMABDI3KRLMQ",
//     secretAccessKey: "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"
//   });


/*
|--------------------------------------------------------------------------
| APP
|--------------------------------------------------------------------------
*/
var app = express();

app.set('host', process.env.NODE_IP || 'localhost');
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  next()
});


var ffmpeg = require('fluent-ffmpeg');


var http = require('http');
var fs = require('fs');







var fftry1 = function () {
console.log('fftry1')


var timestamps1 = [
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
]
var timestamps2 = [
26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50
]
var timestamps3 = [
51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75
]
var timestamps4 = [
76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100
]
var timestamps5 = [
101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124
]
var timestamps6 = [
125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149
]
var timestamps7 = [
150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174
]
var timestamps8 = [
175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199
]
var timestamps9 = [
200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225,
]
var timestamps10 = [
226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 
]
var timestamps11 = [
252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277,
]
var timestamps12 = [
278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300,
]
var timestamps13 = [
300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 
]
var timestamps14 = [
326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 
]
var timestamps15 = [
352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377,
]
var timestamps16 = [
378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 
]
var timestamps17 = [
404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 
]
var timestamps18 = [
430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 
]
var timestamps19 = [
456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 
]
var timestamps20 = [
482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 
]
var timestamps21 = [
508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533,
]
var timestamps22 = [
534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559,
]
var timestamps23 = [
560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585,
]
var timestamps24 = [
586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611,
]
var timestamps25 = [
612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637,
]
var timestamps26 = [
638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663,
]
var timestamps27 = [
664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689,
]
var timestamps28 = [
690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715,
]
var timestamps29 = [
716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741,
]
var timestamps30 = [
742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767,
]
var timestamps31 = [
768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793,
]
var timestamps32 = [
794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819,
]
var timestamps33 = [
820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845,
]
var timestamps34 = [
846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871,
]
var timestamps35 = [
872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897,
]
var timestamps36 = [
898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923,
]
var timestamps37 = [
924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 
]
var timestamps38 = [
950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975,
]
var timestamps39 = [
976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999,1000
]
var timestamps40 = [
1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021,
]
var timestamps41 = [
1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043,
]
var timestamps42 = [
1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 
]
var timestamps43 = [
1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 
]
var timestamps44 = [
1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 
]
var timestamps45 = [
1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 
]
var timestamps46 = [
1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 
]
var timestamps47 = [
1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 
]
var timestamps48 = [
1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 
]
var timestamps49 = [
1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 
]
var timestamps50 = [
1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 
]
var timestamps51 = [
1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 
]
var timestamps52 = [
1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 
]
var timestamps53 = [
1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 
]
var timestamps54 = [
1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 
]
var timestamps55 = [
1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 
]
var timestamps56 = [
1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 
]
var timestamps57 = [
1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 
]
var timestamps58 = [
1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 
]
var timestamps59 = [
1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 
]
var timestamps60 = [
1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 
]
var timestamps61 = [
1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 
]
var timestamps62 = [
1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 
]
var timestamps63 = [
1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 
]
var timestamps64 = [
1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 
]
var timestamps65 = [
1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 
]
var timestamps66 = [
1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 
]
var timestamps67 = [
1594, 1595, 1596, 1597, 1598, 1599, 1600 
]
var timestamps68 = [
1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621
]
var timestamps69 = [
1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643
]
var timestamps70 = [
1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665 
]
var timestamps71 = [
1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687 
]
var timestamps72 = [
1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709 
]
var timestamps73 = [
1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731 
]
var timestamps74 = [
1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753 
]
var timestamps75 = [
1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775
]
var timestamps76 = [
1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797
]
var timestamps77 = [
1798, 1799, 1800
]



var file = fs.createWriteStream("telecut/record2.mp4");
var request = http.get("http://bucketeer-c970a6d1-f419-4561-b5d3-03be633a5c0c.s3.amazonaws.com/public/drvid.mp4", function(response) {
  response.pipe(file);

file.on('finish', function() {
  console.log('donee vid')

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps1,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished1');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps2,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished2');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps3,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished3');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps4,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished4');    
   
ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps5,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished5');  

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps6,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished6');  

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps7,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished7');  

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps8,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished8');  

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps9,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished9');  

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps10,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished10');                      

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps11,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished11');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps12,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished12');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps13,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished13');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps14,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished14');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps15,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished15');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps16,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished16');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps17,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished17');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps18,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished18');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps19,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished19');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps20,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished20');                                    

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps21,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished21');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps22,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished22');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps23,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished23');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps24,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished24');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps25,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished25');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps26,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished26');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps27,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished27');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps28,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished28');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps29,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished29');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps30,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished30');










ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps31,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished31');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps32,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished32');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps33,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished33');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps34,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished34');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps35,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished35');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps36,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished36');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps37,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished37');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps38,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished38');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps39,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished39');            

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps40,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished40 ');  

 








ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps41,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished41');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps42,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished42');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps43,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished43');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps44,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished44');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps45,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished45');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps46,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished46');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps47,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished47');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps48,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished48');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps49,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished49');            

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps50,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished50 '); 








ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps51,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished51');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps52,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished52');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps53,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished53');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps54,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished54');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps55,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished55');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps56,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished56');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps57,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished57');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps58,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished58');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps59,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished59');            

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps60,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished60 '); 










ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps61,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished61');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps62,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished62');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps63,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished63');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps64,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished64');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps65,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished65');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps66,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished66');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps67,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished67');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps68,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished68');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps69,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished69');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps70,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished70');









ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps71,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished71');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps72,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished72');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps73,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished73');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps74,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished74');


ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps75,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished75');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps76,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished76');

ffmpeg('telecut/record2.mp4')
.screenshots({
timestamps: timestamps77,
filename: '%s.png',
size: '120x60',
folder: 'telecut'
})
.on('end', function() {
    console.log('Processing finished77');




process.exit()
})
})
})
})
})
})
})




})
})
})
})
})
})
})
})
})
})



})
})
})
})
})
})
})
})
})
})



})
})
})
})
})
})
})
})
})
})



})
})
})
})
})
})
})
})
})
})

})
})
})
})
})
})
})
})
})
})

})
})
})
})
})
})
})
})
})
}) 
})
})
})
})
})
})
})    
})
})    
})



})
});
}; 
fftry1()





/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */
app.listen(process.env.PORT || 3001)
