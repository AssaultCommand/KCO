$(document).ready(function() 
{
	$(document).on('click', '.buttonback', function()
	{
		history.go(-1);
	});

	/* --- Portfolio Handling --- */

	if($('.portfolio').length)
	{
		/* -- Initialise Slideshow -- */
		/* - Load all the slides into the slideshow. - */
		$('.portfolioColumn:last-child').prependTo('.portfolioContainer');
		$('.portfolioColumn').eq(4).addClass('rightHint');
		$('.portfolioColumn').eq(0).addClass('leftHint');
		$('.portfolioItem').each(function()
		{
			$(this).css({backgroundImage: 'url(' + $(this).data('image') + ')'});
		});

		resetOffset = function()
		{
			switch($('.portfolioViewport').innerHeight())
			{
				case 490:
					leftOffset = '-500px';
					break;
				case 450:
					leftOffset = '-470px';
					break;
			}
		}
		
		var leftOffset = '-500px';
		resetOffset();

		/* -- togglePortfolio -- */
		/* - Show the hints and enable scroller - */
		togglePortfolio = function()
		{
			$('.leftHint, .rightHint').toggleClass('visibleHint');
			$('.portfolioViewport').toggleClass('visibleViewport');
			$('.portfolioScroller').css({marginLeft: ''});
		}
		
		/* -- Scroll Left -- */
		/* - Scrolls the scroller to the left - */
		scrollLeft = function()
		{
			$('.leftHint').removeClass('leftHint visibleHint');
			$('.rightHint').removeClass('rightHint visibleHint');
			
			$('.portfolioScroller').stop(true, true).animate({
				marginLeft: leftOffset //-470px at 1245 or less
			}, 300, function()
			{
				$('.portfolioColumn:first-child').appendTo('.portfolioContainer');
				$('.portfolioScroller').css({marginLeft: '-160px'});
				$('.portfolioColumn').eq(0).addClass('leftHint visibleHint');
				$('.portfolioColumn').eq(4).addClass('rightHint visibleHint');
			});
		}
		
		/* -- Scroll Right -- */
		/* - Scrolls the scroller to the right - */
		scrollRight = function()
		{
			$('.leftHint').removeClass('leftHint visibleHint');
			$('.rightHint').removeClass('rightHint visibleHint');
			$('.portfolioScroller').css({marginLeft: leftOffset}); //-470px at 1245 or less
			$('.portfolioColumn:last-child').prependTo('.portfolioContainer');
			
			$('.portfolioScroller').stop(true, true).animate({
				marginLeft: '-160px'
			}, 300, function()
			{
				$('.portfolioScroller').css({marginLeft: '-160px'});
				$('.portfolioColumn').eq(0).addClass('leftHint visibleHint');
				$('.portfolioColumn').eq(4).addClass('rightHint visibleHint');
			});
		}
		
		/* -- Click Button Portfolio -- */
		/* - When the user clicks the left arrow button, slide to the left. - */
		$(document).on('click', '.portfolioButton', function()
		{
			togglePortfolio();
		});
		
		/* -- Click Button Left -- */
		/* - When the user clicks the left arrow button, slide to the right. - */
		$(document).on('click', '.leftHint.visibleHint', function()
		{
			resetOffset();
			scrollRight();
		});
		
		/* -- Click Button Right -- */
		/* - When the user clicks the left arrow button, slide to the left. - */
		$(document).on('click', '.rightHint.visibleHint', function()
		{
			resetOffset();
			scrollLeft();
		});
	}
});