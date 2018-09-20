//Input active class add
function live_css(e,name)
{
	var temp_lenght = e.value.length; 
	if(temp_lenght == 0)
	{
		$(".user_form input[name="+name+"].form-control").removeClass("active");
		$(".account_form input[name="+name+"].form-control").removeClass("active");
	}else{ 
		 $(".user_form input[name="+name+"].form-control").addClass("active");
		 $(".account_form input[name="+name+"].form-control").addClass("active");
	}
}; 





$(document).ready(function() {
	
	$('.navbar-nav li a').click(function() {
		//alert(0) 
	});
	
	// Slider Js
	$('.singal-slider').owlCarousel({
		loop:true,
		margin:20,	
		autoplay:true, 
		autoplayTimeout:3000,	
		autoplayHoverPause:true,		
		autoplaySpeed: 2000,				
		nav: false,
		dots:true,
		smartSpeed:2000,
		responsive:{
			0:{
				items:1
			},
			640:{
				items:1
			},
			767:{
				items:1
			}, 
			1250:{
				items:1
			}
		}
	});
		
	 
		
	// home top scroll
	$('a[href="#home"]').click(function() {
		$('html, body').animate({scrollTop: $('#home').offset().top}, 'slow');
	});
	
	$('a[href="#How_works"]').click(function() {
		$('html, body').animate({scrollTop: $('#How_works').offset().top -150 }, 'slow');
	});
	
	$('a[href="#Rewards"]').click(function() {
		$('html, body').animate({scrollTop: $('#Rewards').offset().top -150 }, 'slow');
	});
	 
	$('a[href="#Donation"]').click(function() {
		$('html, body').animate({scrollTop: $('#Donation').offset().top -150 }, 'slow');
	});
	
	// Modal One by One show
	$(function() {
		return $(".modal").on("show.bs.modal", function() {
			var curModal;
			curModal = this;
			$(".modal").each(function() {
			  if (this !== curModal) {
				$(this).modal("hide");
			  }
			});
		});
	});
	  
});
 
 
// country dropdown list
$(window).load(function(){ 
	(function($) {
			$(function() {
				var isoCountries = [
					{ id: 'AF', text: 'Afghanistan', code: '+93'},
					{ id: 'AL', text: 'Albania', code: '+355'},
					{ id: 'DZ', text: 'Algeria', code: '+213'},
					{ id: 'AS', text: 'American Samoa', code: '+1684'},
					{ id: 'AD', text: 'Andorra', code: '+376'},
					{ id: 'AO', text: 'Angola', code: '+244'},
					{ id: 'AI', text: 'Anguilla', code: '+1264'},
					{ id: 'AQ', text: 'Antarctica', code: '+672'},
					{ id: 'AG', text: 'Antigua And Barbuda', code: '+1268'},
					{ id: 'AR', text: 'Argentina', code: '+54'},
					{ id: 'AM', text: 'Armenia', code: '+374'},
					{ id: 'AW', text: 'Aruba', code: '+297'},
					{ id: 'AU', text: 'Australia', code: '+61'},
					{ id: 'AT', text: 'Austria', code: '+43'},
					{ id: 'AZ', text: 'Azerbaijan', code: '+994'},
					{ id: 'BS', text: 'Bahamas', code: '+1242'},
					{ id: 'BH', text: 'Bahrain', code: '+973'},
					{ id: 'BD', text: 'Bangladesh', code: '+880'},
					{ id: 'BB', text: 'Barbados', code: '+1246'},
					{ id: 'BY', text: 'Belarus', code: '+375'},
					{ id: 'BE', text: 'Belgium', code: '+32'},
					{ id: 'BZ', text: 'Belize', code: '+501'},
					{ id: 'BJ', text: 'Benin', code: '+229'},
					{ id: 'BM', text: 'Bermuda', code: '+1441'},
					{ id: 'BT', text: 'Bhutan', code: '+975'},
					{ id: 'BO', text: 'Bolivia', code: '+591'},
					{ id: 'BA', text: 'Bosnia And Herzegovina', code: '+387'},
					{ id: 'BW', text: 'Botswana', code: '+267'},
					{ id: 'BR', text: 'Brazil', code: '+55'},
					{ id: 'IO', text: 'British Indian Ocean Territory', code: '+246'},
					{ id: 'BN', text: 'Brunei Darussalam', code: '+673'},
					{ id: 'BG', text: 'Bulgaria', code: '+359'},
					{ id: 'BF', text: 'Burkina Faso', code: '+226'},
					{ id: 'BI', text: 'Burundi', code: '+257'},
					{ id: 'KH', text: 'Cambodia', code: '+855'},
					{ id: 'CM', text: 'Cameroon', code: '+237'},
					{ id: 'CA', text: 'Canada', code: '+1'},
					{ id: 'CV', text: 'Cape Verde', code: '+238'},
					{ id: 'KY', text: 'Cayman Islands', code: '+1345'},
					{ id: 'CF', text: 'Central African Republic', code: '+236'},
					{ id: 'TD', text: 'Chad', code: '+235'},
					{ id: 'CL', text: 'Chile', code: '+56'},
					{ id: 'CN', text: 'China', code: '+86'},
					{ id: 'CX', text: 'Christmas Island', code: '+61'},
					{ id: 'CC', text: 'Cocos (Keeling) Islands', code: '+61'},
					{ id: 'CO', text: 'Colombia', code: '+57'},
					{ id: 'KM', text: 'Comoros', code: '+269'},
					{ id: 'CG', text: 'Congo (DRC)', code: '+243'},
					{ id: 'CD', text: 'Congo (Republic)', code: '+242'},
					{ id: 'CK', text: 'Cook Islands', code: '+682'},
					{ id: 'CR', text: 'Costa Rica', code: '+506'},
					{ id: 'CI', text: 'Cote D" Ivoire', code: '+225'},
					{ id: 'HR', text: 'Croatia', code: '+385'},
					{ id: 'CU', text: 'Cuba', code: '+53'},
					{ id: 'CY', text: 'Cyprus', code: '+357'},
					{ id: 'CZ', text: 'Czech Republic', code: '+420'},
					{ id: 'DK', text: 'Denmark', code: '+45'},
					{ id: 'DJ', text: 'Djibouti', code: '+253'},
					{ id: 'DM', text: 'Dominica', code: '+1767'},
					{ id: 'DO', text: 'Dominican Republic', code: '+1'},
					{ id: 'EC', text: 'Ecuador', code: '+593'},
					{ id: 'EG', text: 'Egypt', code: '+20'},
					{ id: 'SV', text: 'El Salvador', code: '+503'},
					{ id: 'GQ', text: 'Equatorial Guinea', code: '+240'},
					{ id: 'ER', text: 'Eritrea', code: '+291'},
					{ id: 'EE', text: 'Estonia', code: '+372'},
					{ id: 'ET', text: 'Ethiopia', code: '+251'},
					{ id: 'FK', text: 'Falkland Islands (Malvinas)', code: '+500'},
					{ id: 'FO', text: 'Faroe Islands', code: '+298'},
					{ id: 'FJ', text: 'Fiji', code: '+679'},
					{ id: 'FI', text: 'Finland', code: '+358'},
					{ id: 'FR', text: 'France', code: '+33'},
					{ id: 'GF', text: 'French Guiana', code: '+594'},
					{ id: 'PF', text: 'French Polynesia', code: '+689'},
					{ id: 'TF', text: 'French Southern Territories', code: '+262'},
					{ id: 'GA', text: 'Gabon', code: '+241'},
					{ id: 'GM', text: 'Gambia', code: '+220'},
					{ id: 'GE', text: 'Georgia', code: '+995'},
					{ id: 'DE', text: 'Germany', code: '+49'},
					{ id: 'GH', text: 'Ghana', code: '+233'},
					{ id: 'GI', text: 'Gibraltar', code: '+350'},
					{ id: 'GR', text: 'Greece', code: '+30'},
					{ id: 'GL', text: 'Greenland', code: '+299'},
					{ id: 'GD', text: 'Grenada', code: '+1473'},
					{ id: 'GP', text: 'Guadeloupe', code: '+590'},
					{ id: 'GU', text: 'Guam', code: '+1671'},
					{ id: 'GT', text: 'Guatemala', code: '+502'},
					{ id: 'GG', text: 'Guernsey', code: '+44'},
					{ id: 'GN', text: 'Guinea', code: '+224'},
					{ id: 'GW', text: 'Guinea-Bissau', code: '+245'},
					{ id: 'GY', text: 'Guyana', code: '+592'},
					{ id: 'HT', text: 'Haiti', code: '+509'},
					{ id: 'VA', text: 'Holy See (Vatican City State)', code: '+379'},
					{ id: 'HN', text: 'Honduras', code: '+504'},
					{ id: 'HK', text: 'Hong Kong', code: '+852'},
					{ id: 'HU', text: 'Hungary', code: '+36'},
					{ id: 'IS', text: 'Iceland', code: '+354'},
					{ id: 'IN', text: 'India', code: '+91'},
					{ id: 'ID', text: 'Indonesia', code: '+62'},
					{ id: 'IR', text: 'Iran}, Islamic Republic Of', code: '+98'},
					{ id: 'IQ', text: 'Iraq', code: '+964'},
					{ id: 'IE', text: 'Ireland', code: '+353'},
					{ id: 'IM', text: 'Isle Of Man', code: '+44'},
					{ id: 'IL', text: 'Israel', code: '+972'},
					{ id: 'IT', text: 'Italy', code: '+39'},
					{ id: 'JM', text: 'Jamaica', code: '+1876'},
					{ id: 'JP', text: 'Japan', code: '+81'},
					{ id: 'JE', text: 'Jersey', code: '+44'},
					{ id: 'JO', text: 'Jordan', code: '+962'},
					{ id: 'KZ', text: 'Kazakhstan', code: '+7'},
					{ id: 'KE', text: 'Kenya', code: '+254'},
					{ id: 'KI', text: 'Kiribati', code: '+686'},
					{ id: 'KR', text: 'Korea', code: '+82'},
					{ id: 'KW', text: 'Kuwait', code: '+965'},
					{ id: 'KG', text: 'Kyrgyzstan', code: '+996'},
					{ id: 'LA', text: 'Lao People\'s Democratic Republic', code: '+856'},
					{ id: 'LV', text: 'Latvia', code: '+371'},
					{ id: 'LB', text: 'Lebanon', code: '+961'},
					{ id: 'LS', text: 'Lesotho', code: '+266'},
					{ id: 'LR', text: 'Liberia', code: '+231'},
					{ id: 'LY', text: 'Libyan Arab Jamahiriya', code: '+218'},
					{ id: 'LI', text: 'Liechtenstein', code: '+423'},
					{ id: 'LT', text: 'Lithuania', code: '+370'},
					{ id: 'LU', text: 'Luxembourg', code: '+352'},
					{ id: 'MO', text: 'Macao', code: '+853'},
					{ id: 'MK', text: 'Macedonia', code: '+389'},
					{ id: 'MG', text: 'Madagascar', code: '+261'},
					{ id: 'MW', text: 'Malawi', code: '+265'},
					{ id: 'MY', text: 'Malaysia', code: '+60'},
					{ id: 'MV', text: 'Maldives', code: '+960'},
					{ id: 'ML', text: 'Mali', code: '+223'},
					{ id: 'MT', text: 'Malta', code: '+356'},
					{ id: 'MH', text: 'Marshall Islands', code: '+692'},
					{ id: 'MQ', text: 'Martinique', code: '+596'},
					{ id: 'MR', text: 'Mauritania', code: '+222'},
					{ id: 'MU', text: 'Mauritius', code: '+230'},
					{ id: 'YT', text: 'Mayotte', code: '+262'},
					{ id: 'MX', text: 'Mexico', code: '+52'},
					{ id: 'FM', text: 'Micronesia}, Federated States Of', code: '+691'},
					{ id: 'MD', text: 'Moldova', code: '+373'},
					{ id: 'MC', text: 'Monaco', code: '+377'},
					{ id: 'MN', text: 'Mongolia', code: '+976'},
					{ id: 'ME', text: 'Montenegro', code: '+382'},
					{ id: 'MS', text: 'Montserrat', code: '+1664'},
					{ id: 'MA', text: 'Morocco', code: '+212'},
					{ id: 'MZ', text: 'Mozambique', code: '+258'},
					{ id: 'MM', text: 'Myanmar', code: '+95'},
					{ id: 'NA', text: 'Namibia', code: '+264'},
					{ id: 'NR', text: 'Nauru', code: '+674'},
					{ id: 'NP', text: 'Nepal', code: '+977'},
					{ id: 'NL', text: 'Netherlands', code: '+31'},
					{ id: 'NC', text: 'New Caledonia', code: '+687'},
					{ id: 'NZ', text: 'New Zealand', code: '+64'},
					{ id: 'NI', text: 'Nicaragua', code: '+505'},
					{ id: 'NE', text: 'Niger', code: '+227'},
					{ id: 'NG', text: 'Nigeria', code: '+234'},
					{ id: 'NU', text: 'Niue', code: '+683'},
					{ id: 'NF', text: 'Norfolk Island', code: '+672'},
					{ id: 'MP', text: 'Northern Mariana Islands', code: '+1'},
					{ id: 'NO', text: 'Norway', code: '+47'},
					{ id: 'OM', text: 'Oman', code: '+968'},
					{ id: 'PK', text: 'Pakistan', code: '+92'},
					{ id: 'PW', text: 'Palau', code: '+680'},
					{ id: 'PS', text: 'Palestinian Territory}, Occupied', code: '+970'},
					{ id: 'PA', text: 'Panama', code: '+507'},
					{ id: 'PG', text: 'Papua New Guinea', code: '+675'},
					{ id: 'PY', text: 'Paraguay', code: '+595'},
					{ id: 'PE', text: 'Peru', code: '+51'},
					{ id: 'PH', text: 'Philippines', code: '+63'},
					{ id: 'PN', text: 'Pitcairn', code: '+64'},
					{ id: 'PL', text: 'Poland', code: '+48'},
					{ id: 'PT', text: 'Portugal', code: '+351'},
					{ id: 'PR', text: 'Puerto Rico', code: '+1'},
					{ id: 'QA', text: 'Qatar', code: '+974'},
					{ id: 'RE', text: 'Reunion', code: '+262'},
					{ id: 'RO', text: 'Romania', code: '+40'},
					{ id: 'RU', text: 'Russian Federation', code: '+7'},
					{ id: 'RW', text: 'Rwanda', code: '+250'},
					{ id: 'BL', text: 'Saint Barthelemy', code: '+590'},
					{ id: 'SH', text: 'Saint Helena', code: '+290'},
					{ id: 'KN', text: 'Saint Kitts And Nevis', code: '+1869'},
					{ id: 'LC', text: 'Saint Lucia', code: '+1758'},
					{ id: 'MF', text: 'Saint Martin', code: '+590'},
					{ id: 'PM', text: 'Saint Pierre And Miquelon', code: '+508'},
					{ id: 'VC', text: 'Saint Vincent And Grenadines', code: '+1784'},
					{ id: 'WS', text: 'Samoa', code: '+685'},
					{ id: 'SM', text: 'San Marino', code: '+378'},
					{ id: 'ST', text: 'Sao Tome And Principe', code: '+239'},
					{ id: 'SA', text: 'Saudi Arabia', code: '+966'},
					{ id: 'SN', text: 'Senegal', code: '+221'},
					{ id: 'RS', text: 'Serbia', code: '+381'},
					{ id: 'SC', text: 'Seychelles', code: '+248'},
					{ id: 'SL', text: 'Sierra Leone', code: '+232'},
					{ id: 'SG', text: 'Singapore', code: '+65'},
					{ id: 'SK', text: 'Slovakia', code: '+421'},
					{ id: 'SI', text: 'Slovenia', code: '+386'},
					{ id: 'SB', text: 'Solomon Islands', code: '+677'},
					{ id: 'SO', text: 'Somalia', code: '+252'},
					{ id: 'ZA', text: 'South Africa', code: '+27'},
					{ id: 'GS', text: 'South Georgia And Sandwich Isl.', code: '+500'},
					{ id: 'ES', text: 'Spain', code: '+34'},
					{ id: 'LK', text: 'Sri Lanka', code: '+94'},
					{ id: 'SD', text: 'Sudan', code: '+249'},
					{ id: 'SR', text: 'Suriname', code: '+597'},
					{ id: 'SJ', text: 'Svalbard And Jan Mayen', code: '+47'},
					{ id: 'SZ', text: 'Swaziland', code: '+268'},
					{ id: 'SE', text: 'Sweden', code: '+46'},
					{ id: 'CH', text: 'Switzerland', code: '+41'},
					{ id: 'SY', text: 'Syrian Arab Republic', code: '+963'},
					{ id: 'TW', text: 'Taiwan', code: '+886'},
					{ id: 'TJ', text: 'Tajikistan', code: '+992'},
					{ id: 'TZ', text: 'Tanzania', code: '+255'},
					{ id: 'TH', text: 'Thailand', code: '+66'},
					{ id: 'TL', text: 'Timor-Leste', code: '+670'},
					{ id: 'TG', text: 'Togo', code: '+228'},
					{ id: 'TK', text: 'Tokelau', code: '+690'},
					{ id: 'TO', text: 'Tonga', code: '+676'},
					{ id: 'TT', text: 'Trinidad And Tobago', code: '+1868'},
					{ id: 'TN', text: 'Tunisia', code: '+216'},
					{ id: 'TR', text: 'Turkey', code: '+90'},
					{ id: 'TM', text: 'Turkmenistan', code: '+993'},
					{ id: 'TC', text: 'Turks And Caicos Islands', code: '+1649'},
					{ id: 'TV', text: 'Tuvalu', code: '+688'},
					{ id: 'UG', text: 'Uganda', code: '+256'},
					{ id: 'UA', text: 'Ukraine', code: '+380'},
					{ id: 'AE', text: 'United Arab Emirates', code: '+971'},
					{ id: 'GB', text: 'United Kingdom', code: '+44'},
					{ id: 'US', text: 'United States', code: '+1'},
					{ id: 'UM', text: 'United States Outlying Islands', code: '+1'},
					{ id: 'UY', text: 'Uruguay', code: '+598'},
					{ id: 'UZ', text: 'Uzbekistan', code: '+998'},
					{ id: 'VU', text: 'Vanuatu', code: '+678'},
					{ id: 'VE', text: 'Venezuela', code: '+58'},
					{ id: 'VN', text: 'Viet Nam', code: '+84'},
					{ id: 'WF', text: 'Wallis And Futuna', code: '+681'},
					{ id: 'EH', text: 'Western Sahara', code: '+212'},
					{ id: 'YE', text: 'Yemen', code: '+967'},
					{ id: 'ZM', text: 'Zambia', code: '+260'},
					{ id: 'ZW', text: 'Zimbabwe', code: '+263'}
				];
				
				function formatCountry (country) {
				  if (!country.id) { return country.text; }
				  var $country = $( 
					'<span class="flag-text">'+ country.text+"</span>" +
					'<span class="code-text">'+ country.code+"</span>"
				  );
				  return $country;
				};
				
				//Assuming you have a select element with name country
				// e.g. <select name="name"></select>
				
				$("[name='country']").select2({
					placeholder: "Select a country",
					templateResult: formatCountry,
					data: isoCountries
				});
				
				
			});
	})(jQuery);    
}); 



// country dropdown list
$(window).load(function(){ 
	(function($) {
			$(function() {
				var isoquestion = [
					{ id: 'nickname', text: 'What was your childhood nickname?'},
					{ id: 'friend', text: 'What is the name of your favorite friend?'},
					{ id: 'grade', text: 'What street did you live on in third grade?'},
					{ id: 'middle', text: 'What is your oldest sibling middle name?'},
					{ id: 'job', text: 'In what city or town was your first job?'},
					{ id: 'heard', text: 'Where were you when you first heard?'}, 
					{ id: 'nickname1', text: 'What was your childhood nickname?'},
					{ id: 'friend1', text: 'What is the name of your favorite friend?'},
					{ id: 'grade1', text: 'What street did you live on in third grade?'},
					{ id: 'middle1', text: 'What is your oldest sibling middle name?'},
					{ id: 'job1', text: 'In what city or town was your first job?'},
					{ id: 'heard1', text: 'Where were you when you first heard?'}, 
					{ id: 'nickname2', text: 'What was your childhood nickname?'},
					{ id: 'friend2', text: 'What is the name of your favorite friend?'},
					{ id: 'grade2', text: 'What street did you live on in third grade?'},
					{ id: 'middle2', text: 'What is your oldest sibling middle name?'},
					{ id: 'job2', text: 'In what city or town was your first job?'},
					{ id: 'heard2', text: 'Where were you when you first heard?'}, 
					{ id: 'nickname3', text: 'What was your childhood nickname?'},
					{ id: 'friend3', text: 'What is the name of your favorite friend?'},
					{ id: 'grade3', text: 'What street did you live on in third grade?'},
					{ id: 'middle3', text: 'What is your oldest sibling middle name?'},
					{ id: 'job3', text: 'In what city or town was your first job?'},
					{ id: 'heard3', text: 'Where were you when you first heard?'}, 
					{ id: 'nickname4', text: 'What was your childhood nickname?'},
					{ id: 'friend4', text: 'What is the name of your favorite friend?'},
					{ id: 'grade4', text: 'What street did you live on in third grade?'},
					{ id: 'middle4', text: 'What is your oldest sibling middle name?'},
					{ id: 'job4', text: 'In what city or town was your first job?'},
					{ id: 'heard4', text: 'Where were you when you first heard?'}, 
				];
				
				function formatCountry (question) {
				  if (!question.id) { return question.text; }
				  var $question = $( 
					'<span class="flag-text">'+ question.text+"</span>"
				  );
				  return $question;
				};
				
				//Assuming you have a select element with name country
				// e.g. <select name="name"></select>
				
				$("[name='question']").select2({
					placeholder: "Select a question",
					templateResult: formatCountry,
					data: isoquestion, 
				});
			});
	})(jQuery);    
});


(function($) {
    $(function() {

        $('input[type="number"]').styler();

    });
})(jQuery);


(function($) {

    var tabControl = $('._tab-control');
    var tabControlParent = tabControl.closest('div');
    var tabContentContainer = $('._tab-content-container');
    console.log(tabControl);

    tabControl.on('click', function (e) {
       e.preventDefault();

       var target = $(this).attr('href');

       tabControl.removeClass('active');
       tabContentContainer.removeClass('active');
        // tabControlParent.removeClass('active');

        $(this).addClass('active');
        $(this).closest('div').addClass('active');

        $(target).addClass('active');
    });


})(jQuery);


(function ($) {
    // scrollbar init
    $('.scrollbar-inner').scrollbar({
        "showArrows": true,
        "scrolly": "advanced"
    });
})(jQuery);
	
	

	 