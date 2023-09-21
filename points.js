
  var elt = document.getElementById('calculator');
  var calculator = Desmos.GraphingCalculator(elt, {
    keypad: false, zoomButtons: false, settingsMenu: false, expressions: false
  });
  calculator.setExpression({
  type: 'table',
  columns: [
    {
      latex: 'x',
      color: "#000000",
      values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '160', '161', '162', '163', '164', '165', '166', '167', '168', '169', '170', '171', '172', '173', '174', '175', '176', '177', '178', '179', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189', '190', '191', '192', '193', '194', '195', '196']
    },
    {
      latex: 'y',
      color: "#000000",
      values: ['7', '11', '6', '12', '15', '9', '0', '0', '11', '0', '6', '6', '5', '8', '8', '8', '16', '12', '11', '9', '11', '14', '10', '11', '12', '13', '12', '8', '12', '12', '13', '15', '12', '13', '10', '7', '7', '4', '6', '4', '8', '7', '3', '4', '7', '6', '10', '9', '7', '7', '5', '5', '4', '6', '7', '10', '6', '5', '5', '4', '5', '4', '4', '9', '5', '8', '5', '7', '4', '3', '5', '4', '5', '8', '3', '4', '6', '6', '8', '8', '5', '7', '6', '4', '6', '5', '4', '3', '3', '5', '2', '4', '5', '4', '3', '6', '3', '5', '4', '4', '6', '6', '5', '5', '3', '3', '3', '4', '3', '1', '5', '6', '5', '5', '2', '4', '5', '6', '4', '5', '3', '6', '5', '3', '6', '6', '6', '5', '6', '4', '4', '5', '1', '3', '4', '7', '4', '6', '4', '5', '6', '8', '4', '4', '5', '4', '4', '2', '3', '5', '4', '5', '6', '6', '3', '3', '5', '4', '4', '2', '2', '5', '3', '2', '3', '3', '3', '2', '4', '2', '5', '3', '3', '5', '4', '6', '6', '1', '4', '4', '4', '3', '5', '3', '3', '3', '2', '4', '3', '4', '4', '3', '4', '3', '2', '2']
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
      values: ['1', '196']
    },
    {
      latex: 'y',
      color: "#2d70b3",
      lines: true,
      pointOpacity: 0,
      values: ['5.5', '5.5']
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
      values: ['1', '196']
    },
    {
      latex: 'y',
      color: "#388c46",
      lines: true,
      pointOpacity: 0,
      values: ['16', '16']
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
      values: ['1', '196']
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
  calculator.setExpression({ latex: '(98,5.5)', color: '#2d70b3', label: 'Average', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(98,16)', color: '#388c46', label: 'Highest', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(98,0)', color: '#c74440', label: 'Lowest', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(98,-5)', color: '#000000', label: 'Fun Fact / Quote / Riddle # (Date Format: M/D)', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(-4,8)', color: '#000000', label: '# of mentions', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(98, 26)', color: '#000000', label: 'Total Number of Mentions: 1,078', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(98, 24)', color: '#000000', label: 'Mean: 5.5 | Median: 5 | Mode: 4', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(98, 22)', color: '#000000', label: 'Range: 16 | Min: 0 | Max: 16', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(98, 20)', color: '#000000', label: 'Most used reaction: :nerd: (12 different times)', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(5,-3)', color: '#000000', label: '3/14', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(10,-3)', color: '#000000', label: '3/19', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(15,-3)', color: '#000000', label: '3/24', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(20,-3)', color: '#000000', label: '3/29', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(25,-3)', color: '#000000', label: '4/3', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(30,-3)', color: '#000000', label: '4/8', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(35,-3)', color: '#000000', label: '4/13', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(40,-3)', color: '#000000', label: '4/18', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(45,-3)', color: '#000000', label: '4/23', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(50,-3)', color: '#000000', label: '4/28', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(55,-3)', color: '#000000', label: '5/3', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(60,-3)', color: '#000000', label: '5/8', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(65,-3)', color: '#000000', label: '5/13', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(70,-3)', color: '#000000', label: '5/18', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(75,-3)', color: '#000000', label: '5/23', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(80,-3)', color: '#000000', label: '5/28', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(85,-3)', color: '#000000', label: '6/2', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(90,-3)', color: '#000000', label: '6/7', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(95,-3)', color: '#000000', label: '6/12', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(100,-3)', color: '#000000', label: '6/17', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(105,-3)', color: '#000000', label: '6/22', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(110,-3)', color: '#000000', label: '6/27', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(115,-3)', color: '#000000', label: '7/2', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(120,-3)', color: '#000000', label: '7/7', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(125,-3)', color: '#000000', label: '7/12', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(130,-3)', color: '#000000', label: '7/17', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(135,-3)', color: '#000000', label: '7/22', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(140,-3)', color: '#000000', label: '7/27', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(145,-3)', color: '#000000', label: '8/1', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(150,-3)', color: '#000000', label: '8/6', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(155,-3)', color: '#000000', label: '8/11', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(160,-3)', color: '#000000', label: '8/16', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(165,-3)', color: '#000000', label: '8/21', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(170,-3)', color: '#000000', label: '8/26', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(175,-3)', color: '#000000', label: '8/31', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(180,-3)', color: '#000000', label: '9/5', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(185,-3)', color: '#000000', label: '9/10', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(190,-3)', color: '#000000', label: '9/15', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(195,-3)', color: '#000000', label: '9/20', showLabel: true, hidden: true });
calculator.setExpression({ latex: '(1,-7.5)', color: '#000000', label: '2023', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(34,-5)', color: '#000000', label: 'Quotes', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(37,-5)', color: '#000000', label: 'Riddles', showLabel: true, hidden: true });
  calculator.setExpression({ latex: '(1,-5)', color: '#000000', label: 'Fun Facts', showLabel: true, hidden: true });

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
      values: ['-4', '17']
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
      values: ['-4', '17']
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
      values: ['-4', '17']
    }
  ]
});
