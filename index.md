---
layout: home
title: Home
css: ['/css/home.min.css']
---
<!--
	Icons on home page are from Dellipack: http://www.iconfinder.com/iconsets/dellipack
-->
<div class="page-wrapper">
<header class="jumbotron">
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12 character-wrap">
				<img class="character" src="img/autofac_web-banner_character.svg" />
			</div>
			<div class="span12 copy-container">
				<div class="container-fluid">
					<div class="row-fluid">
					<img class="logo-type" src="img/autofac_logo-type.svg" />
					<p class="lead">Autofac is an addictive <a href="http://martinfowler.com/articles/injection.html">Inversion of Control container</a> for .NET Core, ASP.NET Core, .NET 4.5.1+, Universal Windows apps, and more.
					</p>
					<div class="action-buttons">
						<a href="http://autofac.readthedocs.io/en/latest/getting-started/index.html" class="btn btn-primary btn-large">Quick Start Guide &raquo;</a>
						<a href="https://www.nuget.org/packages?q=Owner%3A%22alexmg%22+Autofac*" class="btn btn-primary btn-large">Download via NuGet &raquo;</a>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<div class="container">
	<div class="marketing">
		<div class="row-fluid">
			<div class="span6">
				<h2>Register Components</h2>
				<p>Build up containers with <a href="http://autofac.readthedocs.io/en/latest/register/registration.html">lambdas, types, or pre-built instances</a> of components. You can also <a href="http://autofac.readthedocs.io/en/latest/register/scanning.html">scan assemblies for registrations</a>.</p>
<pre class="prettyprint linenums">
var builder = new ContainerBuilder();

// Register individual components
builder.RegisterInstance(new TaskRepository())
       .As&lt;ITaskRepository&gt;();
builder.RegisterType&lt;TaskController&gt;();
builder.Register(c =&gt; new LogManager(DateTime.Now))
       .As&lt;ILogger&gt;();

// Scan an assembly for components
builder.RegisterAssemblyTypes(myAssembly)
       .Where(t =&gt; t.Name.EndsWith("Repository"))
       .AsImplementedInterfaces();

var container = builder.Build();
</pre>
			</div>
			<div class="span6">
				<h2>Express Dependencies</h2>
				<p>Let Autofac inject your constructor parameters for you. It can also handle <a href="http://autofac.readthedocs.io/en/latest/register/prop-method-injection.html">property and method injection</a>.</p>
<pre class="prettyprint linenums">
public class TaskController
{
  private ITaskRepository _repository;
  private ILogger _logger;

  // Autofac will automatically find the registered
  // values and pass them in for you.
  public TaskController(
    ITaskRepository repository,
    ILogger logger)
  {
    this._repository = repository;
    this._logger = logger;
  }
}
</pre>
			</div>
		</div>
	</div>
	<div class="marketing">
		<div class="row-fluid">
			<div class="span6">
				<h2>Flexible Module System</h2>
				<p>Strike a balance between the deployment-time benefits of <a href="http://autofac.readthedocs.io/en/latest/configuration/xml.html">XML configuration</a> and the power of code with <a href="http://autofac.readthedocs.io/en/latest/configuration/modules.html">Autofac modules</a>.</p>
<pre class="prettyprint linenums">
// Specify complex registrations in code
public class CarTransportModule : Module
{
  public bool ObeySpeedLimit { get; set; }

  protected override void Load(ContainerBuilder builder)
  {
    builder.RegisterType&lt;Car&gt;().As&lt;IVehicle&gt;();

    if (ObeySpeedLimit)
      builder.RegisterType&lt;SaneDriver&gt;().As&lt;IDriver&gt;();
    else
      builder.RegisterType&lt;CrazyDriver&gt;().As&lt;IDriver&gt;();
  }
}
</pre>
<pre class="prettyprint linenums">
&lt;!-- Change deployment-time behavior with XML --&gt;
&lt;autofac&gt;
  &lt;module type="CarTransportModule"&gt;
    &lt;properties&gt;
      &lt;property name="ObeySpeedLimit" value="true" /&gt;
    &lt;/properties&gt;
  &lt;/module&gt;
&lt;/autofac&gt;
</pre>
			</div>
			<div class="span6">
				<h2>Simple Extension Points</h2>
				<p>Autofac provides <a href="https://github.com/autofac/Autofac/wiki/Lifetime-Events">activation events</a> to let you know when components are being activated or released, allowing for a lot of customization with little code.</p>
<pre class="prettyprint linenums">
var builder = new ContainerBuilder();

// Once a listener has been fully constructed and is
// ready to be used, automatically start listening.
builder.RegisterType&lt;Listener&gt;()
       .As&lt;IListener&gt;()
       .OnActivated(e =&gt; e.Instance.StartListening());

// When a processor is being constructed but before
// it's ready to be used, call an initialization method.
builder.RegisterType&lt;Processor&gt;()
       .OnActivating(e =&gt; e.Instance.Initialize());

var container = builder.Build();
</pre>
			</div>
		</div>
	</div>
	<div class="marketing">
		<h1>Dive In</h1>
		<p class="marketing-byline">Want to download Autofac or learn more? Here's how.</p>
		<div class="row-fluid">
			<div class="span4">
				<img class="marketing-img" src="img/icon_arrow.png" alt="Download" width="128" height="128" />
				<h2>Download</h2>
				<p>The easiest way to get Autofac is through NuGet. <a href="https://www.nuget.org/packages?q=Owner%3A%22alexmg%22+Autofac*">Here are the Autofac packages in the NuGet Gallery</a>.</p>
			</div>
			<div class="span4">
				<img class="marketing-img" src="img/icon_school.png" alt="Learn" width="128" height="128" />
				<h2>Learn</h2>
				<p>If you're new to Autofac, <a href="http://autofac.readthedocs.io/en/latest/getting-started/index.html">the Quick Start guide</a> is a good place to start. There's also <a href="http://autofac.readthedocs.io/">an official documentation site</a>, <a href="/apidoc/">API documentation</a>, and <a href="https://github.com/autofac/Autofac/wiki">lots of info on the Autofac wiki</a>. For questions, hit us up on <a href="http://stackoverflow.com/questions/tagged/autofac">StackOverflow</a>.</p>
			</div>
			<div class="span4">
				<img class="marketing-img" src="img/icon_people.png" alt="Get Involved" width="128" height="128" />
				<h2>Get Involved</h2>
				<p>Found an issue? <a href="https://github.com/autofac/Autofac/issues">Let us know!</a> Want to help us improve Autofac? <a href="https://github.com/autofac/Autofac">Check out the source</a> and our <a href="http://autofac.readthedocs.io/en/latest/contributors.html">contributor's guide</a>, and drop us a line on <a href="https://groups.google.com/forum/#forum/autofac">the discussion forum</a>!</p>
			</div>
		</div>
	</div>
</div>
</div>