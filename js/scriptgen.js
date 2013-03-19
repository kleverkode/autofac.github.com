(function($) {
	"use strict";

	var $form = $("#script_options");
	$form.find("input:checkbox").click(generateScript);
	$form.find("input:text").keyup(generateScript);

	function generateScript()
	{
		var include = ["Autofac"];
		$("#application_type,#library_integration,#additional_features").find("input:checkbox:checked").each(function()
		{
			include.push($(this).val());
		});
		// $packages = "Autofac", "Autofac.Mef"; foreach($package in $packages) { Install-Package $package; } Remove-Variable -Name "packages","package";
		// Install-Package NAME [-ProjectName NAME] [-IncludePrerelease]
		alert(include);
	}
}(jQuery));