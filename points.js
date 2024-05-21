
  var elt = document.getElementById('calculator');
  var calculator = Desmos.GraphingCalculator(elt, {
    keypad: false, zoomButtons: false, settingsMenu: false, expressions: false
  });
calculator.setMathBounds({
    left: -50,
    right: 489,
    bottom: -15,
    top: 33
  });
  calculator.setExpression({
  type: 'table',
  columns: [
    {
      latex: 'x',
      color: "#000000",
      values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '160', '161', '162', '163', '164', '165', '166', '167', '168', '169', '170', '171', '172', '173', '174', '175', '176', '177', '178', '179', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189', '190', '191', '192', '193', '194', '195', '196', '197', '198', '199', '200', '201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218', '219', '220', '221', '222', '223', '224', '225', '226', '227', '228', '229', '230', '231', '232', '233', '234', '235', '236', '237', '238', '239', '240', '241', '242', '243', '244', '245', '246', '247', '248', '249', '250', '251', '252', '253', '254', '255', '256', '257', '258', '259', '260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '270', '271', '272', '273', '274', '275', '276', '277', '278', '279', '280', '281', '282', '283', '284', '285', '286', '287', '288', '289', '290', '291', '292', '293', '294', '295', '296', '297', '298', '299', '300', '301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318', '319', '320', '321', '322', '323', '324', '325', '326', '327', '328', '329', '330', '331', '332', '333', '334', '335', '336', '337', '338', '339', '340', '341', '342', '343', '344', '345', '346', '347', '348', '349', '350', '351', '352', '353', '354', '355', '356', '357', '358', '359', '360', '361', '362', '363', '364', '365', '366', '367', '368', '369', '370', '371', '372', '373', '374', '375', '376', '377', '378', '379', '380', '381', '382', '383', '384', '385', '386', '387', '388', '389', '390', '391', '392', '393', '394', '395', '396', '397', '398', '399', '400', '401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418', '419', '420', '421', '422', '423', '424', '425', '426', '427', '428', '429', '430', '431', '432', '433', '434', '435', '436', '437', '438', '439']
    },
    {
      latex: 'y',
      color: "#000000",
      values: ['7', '11', '6', '12', '15', '9', '0', '0', '11', '0', '6', '6', '5', '8', '8', '8', '16', '12', '11', '9', '11', '14', '10', '11', '12', '13', '12', '8', '12', '12', '13', '15', '12', '13', '10', '7', '7', '4', '6', '4', '8', '7', '3', '4', '7', '6', '10', '9', '7', '7', '5', '5', '4', '6', '7', '10', '6', '5', '5', '4', '5', '4', '4', '9', '5', '8', '5', '7', '4', '3', '5', '4', '5', '8', '3', '4', '6', '6', '8', '8', '5', '7', '6', '4', '6', '5', '4', '3', '3', '5', '2', '4', '5', '4', '3', '6', '3', '5', '4', '4', '6', '6', '5', '5', '3', '3', '3', '4', '3', '1', '5', '6', '5', '5', '2', '4', '5', '6', '4', '5', '3', '6', '5', '3', '6', '6', '6', '5', '6', '4', '4', '5', '1', '3', '4', '7', '4', '6', '4', '5', '6', '8', '4', '4', '5', '4', '4', '2', '3', '5', '4', '5', '6', '6', '3', '3', '5', '4', '4', '2', '2', '5', '3', '2', '3', '3', '3', '2', '4', '2', '5', '3', '3', '5', '4', '6', '6', '1', '4', '4', '4', '3', '5', '3', '3', '3', '2', '4', '3', '4', '4', '3', '4', '3', '2', '2', '4', '1', '4', '2', '4', '3', '4', '4', '4', '3', '3', '3', '5', '4', '4', '5', '4', '4', '3', '3', '3', '4', '4', '4', '2', '1', '3', '3', '3', '1', '2', '3', '3', '4', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '1', '2', '2', '3', '5', '3', '3', '3', '9', '12', '8', '5', '8', '7', '8', '8', '6', '6', '7', '5', '4', '8', '9', '12', '12', '10', '9', '8', '10', '9', '11', '10', '10', '11', '11', '11', '8', '8', '11', '7', '12', '10', '11', '12', '10', '10', '9', '9', '9', '10', '10', '11', '8', '11', '8', '7', '7', '9', '8', '11', '7', '11', '13', '12', '9', '10', '12', '12', '10', '12', '10', '11', '11', '9', '9', '7', '8', '7', '7', '9', '9', '8', '8', '9', '9', '9', '10', '9', '7', '10', '9', '7', '9', '11', '10', '10', '10', '11', '12', '10', '12', '13', '14', '11', '12', '13', '10', '9', '12', '13', '14', '12', '10', '10', '10', '11', '11', '10', '9', '10', '12', '11', '7', '9', '10', '8', '8', '10', '9', '9', '11', '10', '12', '9', '10', '9', '10', '9', '10', '7', '7', '8', '11', '9', '12', '12', '10', '8', '8', '9', '8', '9', '9', '6', '10', '10', '10', '10', '10', '9', '12', '11', '10', '11', '12', '14', '12', '10', '11', '10', '11', '10', '12', '11', '11', '10', '9', '9', '13', '10', '9', '11', '9', '9', '10', '9', '9', '11', '18', '10', '10', '9', '9', '8', '9', '11', '9', '10', '9']
    }
  ]
});
  calculator.setExpression({
  type: 'table',
  columns: [
    {
      latex: 'x',
      color: "#2d70b3",
      lines: true,
      pointOpacity: 0,
      values: ['1', '439']
    },
    {
      latex: 'y',
      color: "#2d70b3",
      lines: true,
      pointOpacity: 0,
      values: ['6.90159574468085', '6.90159574468085']
    }
  ]
});
  calculator.setExpression({
  type: 'table',
  columns: [
    {
      latex: 'x',
      color: "#388c46",
      lines: true,
      pointOpacity: 0,
      values: ['1', '439']
    },
    {
      latex: 'y',
      color: "#388c46",
      lines: true,
      pointOpacity: 0,
      values: ['18', '18']
    }
  ]
});
  calculator.setExpression({
  type: 'table',
  columns: [
    {
      latex: 'x',
      color: "#c74440",
      lines: true,
      pointOpacity: 0,
      values: ['1', '439']
    },
    {
      latex: 'y',
      color: "#c74440",
      lines: true,
      pointOpacity: 0,
      values: ['0', '0']
    }
  ]
});
calculator.setExpression({
  type: 'table',
  columns: [
    {
      latex: 'x',
      color: "#6042a6",
      lines: true,
      pointOpacity: 0,
      values: ['1','10' ,'30' ,'50' ,'70' ,'90' ,'110' ,'130' ,'150' ,'170' ,'190' ,'210' ,'230' ,'250' ,'270' ,'290' ,'310' ,'330' ,'350' ,'370' ,'390' ,'410' ,'439']
    },
    {
      latex: 'y',
      color: "#6042a6",
      lines: true,
      pointOpacity: 0,
      values: ['8','8' ,'10.3' ,'6.25' ,'5.55' ,'4.4' ,'4.3' ,'4.65' ,'4.35' ,'3.5' ,'3.15' ,'3.75' ,'2.75' ,'5.55' ,'9.45' ,'9.6' ,'9.8' ,'9.35' ,'11.3' ,'9.5' ,'9.25' ,'10.95' ,'9.94736842105263']
    }
  ]
});
 calculator.setExpression({ latex: '(219.5,6.90159574468085)', color: '#2d70b3', label: 'Average', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(219.5,18)', color: '#388c46', label: 'Highest', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(219.5,0)', color: '#c74440', label: 'Lowest', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(219.5,-6)', color: '#000000', label: 'Fun Fact / Quote / Riddle / MC Fact # (Date Format: M/D)', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(-25,9)', color: '#000000', label: '# of mentions', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(219.5, 26)', color: '#000000', label: 'Total Number of Mentions: 2,595', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(219.5, 24)', color: '#000000', label: 'Mean: 6.90159574468085 | Median: 6 | Mode: 4', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(219.5, 22)', color: '#000000', label: 'Range: 18 | Min: 0 | Max: 18', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(219.5, 20)', color: '#000000', label: 'Most used reaction: :nerd: (13 different times)', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(20,-3)', color: '#000000', label: '3/29', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(40,-3)', color: '#000000', label: '4/18', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(60,-3)', color: '#000000', label: '5/8', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(80,-3)', color: '#000000', label: '5/28', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(100,-3)', color: '#000000', label: '6/17', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(120,-3)', color: '#000000', label: '7/7', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(140,-3)', color: '#000000', label: '7/27', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(160,-3)', color: '#000000', label: '8/16', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(180,-3)', color: '#000000', label: '9/5', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(200,-3)', color: '#000000', label: '9/25', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(220,-3)', color: '#000000', label: '10/15', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(240,-3)', color: '#000000', label: '11/4', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(260,-3)', color: '#000000', label: '11/24', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(280,-3)', color: '#000000', label: '12/14', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(300,-3)', color: '#000000', label: '1/3', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(320,-3)', color: '#000000', label: '1/23', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(340,-3)', color: '#000000', label: '2/12', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(360,-3)', color: '#000000', label: '3/3', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(380,-3)', color: '#000000', label: '3/23', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(400,-3)', color: '#000000', label: '4/12', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(420,-3)', color: '#000000', label: '5/2', showLabel: true, hidden: true });
calculator.setExpression({ latex: '(1,-7.5)', color: '#000000', label: '2023', showLabel: true, hidden: true });
calculator.setExpression({ latex: '(298,-7.5)', color: '#000000', label: '2024', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(34,20)', color: '#000000', label: 'Quotes', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(55,-5)', color: '#000000', label: 'Riddles', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(18,-5)', color: '#000000', label: 'Fun Facts', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(248,-5)', color: '#000000', label: 'MC Facts', showLabel: true, hidden: true });

 calculator.setExpression({
  type: 'table',
  columns: [
    {
      latex: 'x',
      color: "#000000",
      lines: true,
      pointOpacity: 0,
      lineStyle: Desmos.Styles.DASHED,
      values: ['1', '1']
    },
    {
      latex: 'y',
      color: "#000000",
      lines: true,
      pointOpacity: 0,
      lineStyle: Desmos.Styles.DASHED,
      values: ['-4', '19']
    }
  ]
});

 calculator.setExpression({
  type: 'table',
  columns: [
    {
      latex: 'x',
      color: "#000000",
      lines: true,
      pointOpacity: 0,
      lineStyle: Desmos.Styles.DASHED,
      values: ['248', '248']
    },
    {
      latex: 'y',
      color: "#000000",
      lines: true,
      pointOpacity: 0,
      lineStyle: Desmos.Styles.DASHED,
      values: ['-4', '19']
    }
  ]
});

 calculator.setExpression({
  type: 'table',
  columns: [
    {
      latex: 'x',
      color: "#000000",
      lines: true,
      pointOpacity: 0,
      lineStyle: Desmos.Styles.DASHED,
      values: ['34', '34']
    },
    {
      latex: 'y',
      color: "#000000",
      lines: true,
      pointOpacity: 0,
      lineStyle: Desmos.Styles.DASHED,
      values: ['-4', '19']
    }
  ]
});

 calculator.setExpression({
  type: 'table',
  columns: [
    {
      latex: 'x',
      color: "#000000",
      lines: true,
      pointOpacity: 0,
      lineStyle: Desmos.Styles.DASHED,
      values: ['37', '37']
    },
    {
      latex: 'y',
      color: "#000000",
      lines: true,
      pointOpacity: 0,
      lineStyle: Desmos.Styles.DASHED,
      values: ['-4', '19']
    }
  ]
});
