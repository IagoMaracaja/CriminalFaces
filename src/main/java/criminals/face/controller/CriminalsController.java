/**
 * 
 */
package criminals.face.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import criminals.face.domain.Criminal;

/**
 * 
 * @author andre.i.albuquerque
 *
 */
@Controller
public class CriminalsController {
	
	Logger logger = LoggerFactory.getLogger(getClass()); 
	
	@RequestMapping( value="/pages/teste.html", method= RequestMethod.GET)
	public ModelAndView showWelcomeHtml (HttpServletRequest request){
		ModelAndView modelAndView = new ModelAndView();
		
		logger.debug("Logando coisa e tal..Sei que lá..");
		
		modelAndView.setViewName("index");
		
		return modelAndView;
	}
	
	@RequestMapping( value="/criminoso/addCriminal.html", method= RequestMethod.GET)
	public ModelAndView openAddCriminalPage (HttpServletRequest request, @ModelAttribute("criminalsProfile") Criminal newCriminal){
		
		
		ModelAndView modelAndView = new ModelAndView();
		
		logger.debug("Testando css..");
		
		modelAndView.setViewName("add-criminal");
		
		return modelAndView;
	}
	
	@RequestMapping( value="/criminoso/addCriminal.html", method= RequestMethod.POST)
	public ModelAndView addCriminalPage (HttpServletRequest request, @ModelAttribute("criminalsProfile") Criminal newCriminal){
		
		
		ModelAndView modelAndView = new ModelAndView();
		
		logger.debug("Testando css..");
		
		modelAndView.setViewName("add-criminal");
		
		return modelAndView;
	}

}
